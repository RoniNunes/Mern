const mongoose = require('../config/database');
const auto_increment = require('mongoose-auto-increment');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
auto_increment.initialize(mongoose);
var usuario = new Schema({
    email : {
        type:String,
        unique: true,
        lowercase: true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    },
    password: {
        type:String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now()
    }
});

usuario.plugin(auto_increment.plugin, {
    model: 'Usuario',
    field: 'user_id',
    startAt: 100,
    incrementBy: 100
});
mongoose.plugin(slug);

module.exports = mongoose.model('Usuario',usuario);