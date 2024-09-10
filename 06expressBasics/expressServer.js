import express from 'express';

const app = express();  // Initialize the Express application
const port = 3000;      // Define the port for the server

// Define a simple GET endpoint for the root path "/"
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Define another GET endpoint for the "/about" path
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Listen to the specified port and log when the server is up and running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
