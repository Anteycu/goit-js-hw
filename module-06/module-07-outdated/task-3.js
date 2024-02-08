const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const item = document.createElement("li");
  const gallImg = document.createElement("img");
  gallImg.setAttribute("src", image.url);
  gallImg.setAttribute("alt", image.alt);

  item.append(gallImg);
  fragment.append(item);
});

galleryRef.append(fragment);

const gallImges = document.querySelectorAll("img");
gallImges.forEach((image) => {
  image.classList.add("galleryImg");
});

const items = document.querySelectorAll("#gallery li");
items.forEach((item) => {
  item.classList.add("gallery__item");
});

galleryRef.classList.add("gallery-js");
