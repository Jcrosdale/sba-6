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
export function handleError(error: unknown): void {
    // Display error
    if (error instanceof NetworkError) {
        console.error('Network problem:', error.message);
    } else if (error instanceof DataError) {
        console.error('Data problem:', error.message);
    } else if (error instanceof Error) {
        console.error('Unexpected error:', error.message)
    }else {
        console.error('Unresolved Error:', error);
    }
}