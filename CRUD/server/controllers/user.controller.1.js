var UserModel = require('../models/users.models');
var AccountModel = require('../models/accounts.models');


/** CREATE TOLKEN */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../config/nodemon')
const CheckAuth = require('../middlewares/check-auth')

const User = require("../models/users.models");
/** END IMPORTATION MODIFY */

exports.cadastrar = async (req, res, next) => {
  const usuario = await UserModel();
  usuario.email = req.body.email;
  usuario.password = req.body.password;

  usuario.save((err, result) => {
    if (err) {
      res.status(500).json({ erro: 'erro para Cadastrar no banco de dados' });
    }
    res.status(200).json({ result: result });
  });
}
/**ENCRYPTANDO */
exports.signup = async (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
}

/**FIM ENCRYPTANDO */
/**DELETE USUARIOS */
exports.userDelete = async (req, res, next) => {

  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}
/**FIM DELETE USUARIOS*/
/**LOGIN */
exports.login = async (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
              
            },
            
            config.JWT_KEY,
            //process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          //req.body.UserId= decoded.id;
          
          return res.status(200).json({
            message: "Auth successful",
            token: token,
            user_id: user[0]._id
          }
          );
          
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}
/**END LOGIN adcionar as conta e aqui doido */

/**UPDATE */
exports.accountsUpdate = async (req, res, next) => {
  const { email, password } = req.body;
  const newAccount = { email, password };
  console.log({id: req.params.id})
  console.log({Update: newAccount});
  await AccountModel.findByIdAndUpdate(req.params.id, newAccount)
  res.status(200).json({ status: 'Updatede' })
}
/**END UPDATE */
/**START ACCOUNT DELETE */
exports.accountDelete = async (req, res, next) => {
  await AccountModel.findByIdAndRemove(req.params.id)
  res.status(200).json({ UserDeleted: req.params.id })

    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}
/**ACCOUNT END DELETE */



exports.accountsAdd = async (req, res, next) => {
  const account = await AccountModel();
  //console.log({id: req.params._id});
  //account.usuario_id = req.userData.userId;
  account.email = req.body.email;
  account.password = req.body.password;
  

  await account.save((err, result) => {
    if (err) {
      res.status(500).json({ erro: 'Usuaio nao insertado erro para inserir "accountsAdd" no banco de dados' });
    }
    res.status(200).json({ result: result });
  });
}
//view accounts
exports.getaccounts = async (req, res, next) => {
  await AccountModel.find({ usuario_id: req.userData.userId }).populate({ 'path': 'usuario_id' }).then((result) => {
    res.status(200).json({ result: result });
    const dat = req.params
    console.log(dat)
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ erro: 'erro para inserir no banco de dados' });
  });
}