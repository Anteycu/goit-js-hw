const categoriesRef = document.querySelectorAll("li.item").length;
console.log(`List has ${categoriesRef} category(-ies).`);

const titleRef = document.querySelectorAll("h2").forEach((item) => {
  console.log(`Category: ${item.innerText}`);
  console.log(`Quantity: ${item.nextElementSibling.children.length}`);
});
