// Define a Product class that includes the appropriate properties based on data provided in the API response.

class Product {
    slug: string;
    name: string;
    price: number;
    url: string;
    discountPercentage: number;

    constructor(slug: string, name: string, url:string, price: number, discountPercentage: number) {
        this.slug = slug;
        this.name = name;
        this.url = url;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }

    // Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.
    
    displayDetails(): string {
        return `Slug: ${this.slug}, Name: ${this.name}, URL: ${this.url}.`
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price) * (this.discountPercentage/100)
    }
}