import {
    products
} from "../products/products.js"


export const productsPage = (content) => {

    const getproductsMarkup = () => {
        return products.productsItems.reduce((acc, product) => {
            acc += `< li class ="productListItem">
        h2 class="productName"> ${product.product.name}<h2>
        <p class="productPrice">${product.productPrice}<p>
        <button type="button">Add to cart</button>
        </li >`

            return acc
        }, '');

    }
    content.innerHTML = <ul class = "productList"> ${getproductsMarkup()}</ul>
};