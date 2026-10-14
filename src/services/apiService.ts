// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.
async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
    } catch (error) {
        console.error("Fetch error", error);
    }
}