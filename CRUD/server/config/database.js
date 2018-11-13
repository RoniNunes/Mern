const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ronny',{
}).then(()=>{
        console.log("Conexão foi satisfatoria con la base de datos");
    }).catch((err)=>{
        console.log(`ocorreu um erro em conectar com banco de dados: ${err}`)  ;
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;