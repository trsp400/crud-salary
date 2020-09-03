const {Router} = require('express');

const routes = Router();

routes.get('/', function(request, response) {
    return response.send('teste');
});

module.exports = routes;