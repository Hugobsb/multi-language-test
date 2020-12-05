const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    "locale": {
        "type": "String",
        "required": "Insert the language"
    },
    "category": {
        "type": "String",
        "required": "Insert the category"
    },
    "data": {
        "type": "Array",
        "required": "Insert the data"
    }
});

module.exports = mongoose.model('Data', DataSchema);