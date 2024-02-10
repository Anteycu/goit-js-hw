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

let inputData = { email: "", message: "" };
const formState = load("feedback-form-state");
if (formState) {
  formRef.elements.email.value = formState.email;
  formRef.elements.message.value = formState.message;
} else {
  formRef.elements.email.value = inputData.email;
  formRef.elements.message.value = inputData.message;
}

const onInput = function (e) {
  e.preventDefault();
  const { target } = e;
  inputData = { ...inputData, [target.name]: target.value };
  save("feedback-form-state", inputData);
  console.log(inputData);
};

const onSubmit = function (e) {
  e.preventDefault();
  const initialInputData = { email: "", message: "" };
  const { target } = e;
  console.log(target.elements.email.value, target.elements.message.value);
  target.elements.email.value = initialInputData.email;
  target.elements.message.value = initialInputData.message;
  save("feedback-form-state", initialInputData);
};

formRef.addEventListener("input", throttle(onInput, 500));
formRef.addEventListener("submit", onSubmit);
