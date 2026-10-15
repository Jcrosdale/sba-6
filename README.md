How you implemented TypeScript features and OOP principles.
I implemented TypeScript features and OOP principles throughout each of the files through classes and functions. This includes types for product data, function parameters, and return types. For example, in the Product class, I created properties from the JSON file and added methods that use them. Each file was created with its own components through imports and exports to improve code reusability. For example, inheritance was utilized when network and data error extended the parent class, Error.

The challenges you encountered and how you overcame them.
The main challenges I encountered involved the overall syntax and ensuring that everything was correct, for example, defining types, correct parenthesis placement, and imports and exports. Also a challenge was connecting the API data with the new Product class. To overcome these challenges, I tested and debugged the code as I went, reading error messages and making adjustments until the issues and errors were resolved.

How you handled asynchronous operations and error management.
I handled asynchronous operations using async and await to fetch data even while the request was pending. I then created try and catch to handle any errors during unresolved HTTP requests. Custom error classes, such as network or data errors, were also created using instanceof to encompass different reasons that could result in an error. The correct import also needed to be used to run the error as well.
