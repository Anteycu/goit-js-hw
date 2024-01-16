const categoryList = document.querySelector("#categories");
console.log(`Number of categories: ${categoryList.children.length}`);

const countedCategoryItems = document.querySelectorAll("h2").forEach((item) => {
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${item.nextElementSibling.childElementCount}`);
});
