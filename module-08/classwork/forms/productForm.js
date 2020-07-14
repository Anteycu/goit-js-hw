export const productForm = () => {
    return `
    <form class="productForm" name="productForm">
            <input type="text" class="formInput" name="productName" placeholder="Name">
            <input type="text" class="formInput" name="productPrice" placeholder="Price">
            <button class="formButton" type="submit">Add product</button>
    </form>
`
}