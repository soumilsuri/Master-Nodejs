# Understanding HTTP Status Codes

HTTP status codes are standardized codes returned by servers in response to a client's request. These codes give information about the outcome of the request, whether it was successful, redirected, had client-side issues, or failed due to server errors.

### Categories of HTTP Status Codes

HTTP status codes are divided into five main categories:

1. **1xx Informational Responses**: These indicate that the request has been received and is being processed.
   - Example: `100 Continue` – The initial part of the request has been received and the client can continue with the rest.

2. **2xx Success**: These codes indicate that the request was successfully received, understood, and processed by the server.
   - Example: `200 OK` – The request was successful, and the server has returned the requested resource.
   - Example: `201 Created` – The request was successful, and a new resource has been created.

3. **3xx Redirection**: These codes indicate that the client must take additional action to complete the request, usually by following a redirection.
   - Example: `301 Moved Permanently` – The requested resource has been permanently moved to a new URL.
   - Example: `302 Found` – The requested resource is temporarily available at a different URL.

4. **4xx Client Errors**: These codes indicate that there was an error with the client's request, either in how it was formed or with the data provided.
   - Example: `400 Bad Request` – The server could not understand the request due to invalid syntax.
   - Example: `401 Unauthorized` – Authentication is required to access the resource.
   - Example: `404 Not Found` – The requested resource could not be found on the server.

5. **5xx Server Errors**: These codes indicate that something went wrong on the server’s end while processing the request.
   - Example: `500 Internal Server Error` – The server encountered an error and could not complete the request.
   - Example: `503 Service Unavailable` – The server is temporarily unable to handle the request, often due to overload or maintenance.

### Example: Using HTTP Status Codes in Express.js
In Express.js, you can easily send appropriate status codes along with responses using `res.status()`. Here’s an example of how to use some common status codes:

```js
import express from 'express';

const app = express();
const PORT = 8000;

// Simulate a successful response
app.get('/success', (req, res) => {
  res.status(200).send('Request successful!');
});

// Simulate resource creation
app.post('/create', (req, res) => {
  res.status(201).send('Resource created successfully!');
});

// Simulate a bad request
app.get('/bad-request', (req, res) => {
  res.status(400).send('Bad Request: Invalid input!');
});

// Simulate not found error
app.get('/not-found', (req, res) => {
  res.status(404).send('Resource not found');
});

// Simulate internal server error
app.get('/server-error', (req, res) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

In this example, we handle different routes and return appropriate status codes to reflect the result of the request.

### Conclusion

HTTP status codes are an essential part of web development. They provide feedback about the state of a request and help guide the client’s next steps. Correctly using status codes improves both the client’s and server's interaction by giving clear feedback on the success or failure of a request.

For a comprehensive list of HTTP status codes and more details on each one, you can visit [MDN's HTTP Status Code documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
