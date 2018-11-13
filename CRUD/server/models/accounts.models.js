const mongoose = require('../config/database');
const auto_increment = require('mongoose-auto-increment');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
auto_increment.initialize(mongoose);
var account = new Schema({
    usuario_id: {
        type: Schema.ObjectId,
        ref: 'Usuario',
        required: true
    },
    email : {
        type:String,
        unique: true,
        lowercase: true
    },
    password: {
        type:String
    },
    created_at: {
        type: String,
        default: Date.now()
    }
});

account.plugin(auto_increment.plugin, {
    model: 'Account',
    field: 'account_id',
    startAt: 100,
    incrementBy: 100
});
mongoose.plugin(slug);

module.exports = mongoose.model('Account',account);