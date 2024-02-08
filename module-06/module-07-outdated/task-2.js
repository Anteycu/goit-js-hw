const ingredients = [
  "Potato",
  "Mushrooms",
  "Garlic",
  "Tomato",
  "Greens",
  "Spices",
];

const liRefArr = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

const ulRef = document.querySelector("#ingredients");
ulRef.append(...liRefArr);
