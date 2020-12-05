const { Router } = require('express');
const routes = Router();

const LanguageController = require('./controllers/LanguageController');

routes.get('/', (req, res) => {
    res.json(
        LanguageController.getData(req.headers["accept-language"])
    );
});

module.exports = routes;