import Product from "../models/Product.js"

// Create a calculateDiscount() function to handle discount calculations for products.
export class DiscountCalculator {
    // This function should return the dollar amount that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $10.
    calculateDiscount(product: Product): number {
        return (product.price) * (product.discountPercentage/100)
    }

}
