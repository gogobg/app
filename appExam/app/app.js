const express = require('express');
const bodyParser = require('body-parser');

const init = (data) => {
    const app = express();

    // app.set('views', __dirname + '/views');
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.get('/', (req, res) => {
        return res.render('home');
    });

    app.get('/items', (req, res) => {
        return data.items.getAll()
            .then((items) => {
                return res.render('items/all', {
                    context: items,
                });
            });
    });


    app.get('/items/form', (req, res) => {
        // console.log(__dirname);
        // return res.send("11111asdasdasd");
        return res.render('items/form');
    });


    app.post('/items', (req, res) => {
        const item = req.body;
        // validation items
        return data.items.create(item)
            .then((dbItem) => {
                return res.redirect('items/' + dbItem.id);
            });
    });

    return Promise.resolve(app);
};

module.exports = {
    init,
};
