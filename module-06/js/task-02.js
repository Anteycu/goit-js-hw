const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markup = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.className = "item";
  return li;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...markup);
