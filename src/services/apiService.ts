import Product from "../models/Product.js"
import { handleError, NetworkError } from "../utils/errorHandler.js";

// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.
export async function fetchProducts(): Promise<Product[]> { // return type is an array
    try {
        const response = await fetch('https://dummyjson.com/products');

        // Check if HTTP request was successful
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json(); // parse the response
        return data.products;

    } catch (error) {
        if (error instanceof TypeError) {
            throw new NetworkError('Unable to connect to the API.')
        }

        throw error; 
    }
};