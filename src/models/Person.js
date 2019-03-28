const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    nombres: String,
    pagina: String,
    eco: String
});

module.exports = mongoose.model('person', PersonSchema); 