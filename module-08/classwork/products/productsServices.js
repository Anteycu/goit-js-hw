{
    /*<form class="productForm" name="productForm">
                <input type="text" class="formInput" name="productName" placeholder="Name">
                <input type="text" class="formInput" name="productPrice" placeholder="Price">
                <button class="formButton" type="submit">Add product</button>
    </form>*/
}

const products = {
    productsItems: []
}

export const productServices = () => {

    const product = {
        productName: '',
        productPrice: 0
    }


    const productForm = document.forms.productForm;


    const getProductInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        product[name] = value;
    }

    const addProduct = (e) => {
        e.preventDefault();
        products.productsItems = [...products.productsItems, {
            ...product,
            id: Date.now()
        }];
        productForm.reset();
        console.log(products);
    }
    productForm.addEventListener('input', getProductInfo)
    productForm.addEventListener('submit', addProduct)

}