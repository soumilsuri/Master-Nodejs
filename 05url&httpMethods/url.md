# URL Basics

## 1. HTTP vs HTTPS
- **HTTP (HyperText Transfer Protocol)**:
  - Data is transferred in plain text.
  - Example: `http://example.com`
  - No encryption, vulnerable to attacks (e.g., man-in-the-middle).
  
- **HTTPS (HyperText Transfer Protocol Secure)**:
  - Data is encrypted using SSL/TLS.
  - Example: `https://example.com`
  - More secure, often required for handling sensitive information like passwords or payment details.

## 2. Base URL
- The foundational part of a URL, representing the domain of the website or API.
- Everything after the base URL defines specific resources or actions.
- Example: 
  - Base URL: `https://api.example.com`
  - Complete URL: `https://api.example.com/users/123`
  
## 3. Endpoints
- Endpoints specify the path to resources or functionalities.
- Combined with the base URL to form a complete API call.
- Example: 
  - Endpoint: `/users/123`
  - Full URL: `https://api.example.com/users/123`
  - This might retrieve user data with the ID of 123.

## 4. Query Parameters
- Passed after the `?` in the URL, providing additional data to the server.
- Format: `?key=value&key2=value2`
- Used to filter or modify data requests.
- Example:
  ```text
  https://example.com/products?category=electronics&price_range=500-1000
  
category=electronics: Filters the products by category.

price_range=500-1000: Restricts the price range to 500-1000 units.

Example URL Breakdown

URL: https://api.example.com/users/123?active=true&role=admin

Base URL: https://api.example.com

Endpoint: /users/123

Query Parameters: ?active=true&role=admin
