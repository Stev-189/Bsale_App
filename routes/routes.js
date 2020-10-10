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
    
    app.get('/product/text/:name', (request, response) => {
        const name = `%${request.params.name}%`;
        pool.query('SELECT * FROM product WHERE name LIKE ?', name, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
////////
    app.get('/product/category/:category', (request, response) => {
        const category = request.params.category;
        pool.query('SELECT * FROM product WHERE category = ?', category, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
////////////
}

// Export the router
module.exports = router;
