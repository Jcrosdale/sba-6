// NetworkError for network-related issues.
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

// DataError for data-related issues (e.g., missing fields in the API response).
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}

// Implement a custom error class and functions to handle different types of errors gracefully.
function handleError() {
    
}