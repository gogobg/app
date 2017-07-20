const BaseData = require('./base.data');
const Item = require('../models/item.model');


class ItemsData extends BaseData {
    constructor(db) {
        super(db, Item);
    }

    _isModelValid(model) {
        return typeof model.text === 'string';
    }
}


module.exports = ItemsData;
