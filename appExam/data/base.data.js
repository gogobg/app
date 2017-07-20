
class BaseData {
    constructor(db, ModelClass) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    getAll() {
        return this.collection.find({}).toArray();
    }

    create(model) {
        //????????
        if (!this._isModelValid(model)) {
            return Promise.reject('invalid crate model data');
        }
        // validate 
        return this.collection.insert(model);
    }

    _isModelValid(model) {
        return true;
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;
