const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const app = express();
const cors =require('cors')//

app.use(bodyParser.json());
app.use(cors());//
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});
