// Load the MySQL pool connection
const pool = require('../data/config');

// Route the app
const router = app => {
    // Display welcome message on the root
    app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to the Node.js Express REST API!'
        });
    });

    // Display all product
    app.get('/product', (request, response) => {
        pool.query('SELECT * FROM product', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
    // Display all category
    app.get('/category', (request, response) => {
        pool.query('SELECT * FROM category', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    // Display a single product by ID
    app.get('/product/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM product WHERE id = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
}

// Export the router
module.exports = router;
