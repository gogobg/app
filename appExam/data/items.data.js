const BaseData = require('./base.data');
const Item = require('../models/item.model');


class ItemsData extends BaseData {
    constructor(db) {
        super(db, Item);
    }
}


module.exports = ItemsData;
