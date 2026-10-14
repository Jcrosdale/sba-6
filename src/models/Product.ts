// Define a Product class that includes the appropriate properties based on data provided in the API response.

export default class Product {
    id: number; // identifies the product
    title: string; // product name
    price: number; // cost
    category: string; // determine if taxed
    discountPercentage: number; // discount 

    constructor(id: number, title: string, price: number, category:string, discountPercentage: number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.discountPercentage = discountPercentage;
    }

    // Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.
    
    displayDetails(): string {
        return `Id: ${this.id}, Name: ${this.title}, Category: ${this.category}.`
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price) * (this.discountPercentage/100)
    }
}

