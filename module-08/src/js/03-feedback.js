import throttle from "lodash.throttle";
const formRef = document.querySelector(".feedback-form");

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

let formState = load("feedback-form-state") ?? {};

const isObjectEmpty =
  Object.keys(formState).length === 0 && formState.constructor === Object;
if (!isObjectEmpty) {
  const {
    elements: { email, message },
  } = formRef;
  email.value = formState.email;
  message.value = formState.message;
}

const onInput = function (e) {
  e.preventDefault();
  const { target } = e;
  formState = { ...formState, [target.name]: target.value };
  save("feedback-form-state", formState);
};

const onSubmit = function (evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.target;
  console.log(email.value, message.value);
  localStorage.removeItem("feedback-form-state");
  formRef.reset();
};

formRef.addEventListener("input", throttle(onInput, 500));
formRef.addEventListener("submit", onSubmit);
