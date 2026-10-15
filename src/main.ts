// Import the product classes, tax calculator, and API service.
import Product from "./models/Product.js"
import { fetchProducts } from "./services/apiService.js";
import calculateTax from "./utils/taxCalculator.js";
import DiscountCalculator from "./utils/discountCalculator.js";
import { handleError } from "./utils/errorHandler.js";

// Use asynchronous functions to fetch product data and display it.
async function main(): Promise<void> {
    try {
        // Create instances of Product by fetching product data from the API.
        const productData = await fetchProducts();

        const product = productData.map((item) => //go through each object in the array
            new Product(
                item.id,
                item.title,
                item.price,
                item.category,
                item.discountPercentage
            ))

        // Demonstrate error handling and OOP principles in action.
        const discountCalculator = new DiscountCalculator();

        for (const product of products) {
            console.log(product.displayDetails());

            const discount = discountCalculator.calculateDiscount(product);
            const discountedPrice = product.getPriceWithDiscount;
            const tax = calculateTax(product);

            console.log(`Original Price: $${product.price}`);
            console.log(`Discount Amount: $${discount}`);
            console.log(`Price After Discount: $${discountedPrice}`);
            console.log(`Tax amount: $${tax}`);
        };
    } catch {
        handleError(Error);
    }
}


main();