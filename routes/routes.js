const pool = require('../data/config');

const router = app => {

    app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to the Node.js Express REST API!'
        });
    });
//get all productos
    app.get('/product', (request, response) => {
        pool.query('SELECT * FROM product', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
//get all productos
    app.get('/category', (request, response) => {
        pool.query('SELECT * FROM category', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    app.get('/product/:id', (request, response) => {
        const id = request.params.id;
        pool.query('SELECT * FROM product WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
//get de busqueda
    app.get('/product/text/:name', (request, response) => {
        const name = `%${request.params.name}%`;
        pool.query('SELECT * FROM product WHERE name LIKE ?', name, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
//get de filtrar Categoria
    app.get('/product/category/:category', (request, response) => {
        const category = request.params.category;
        pool.query('SELECT * FROM product WHERE category = ?', category, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
}

module.exports = router;
