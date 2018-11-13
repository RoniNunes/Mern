var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller');
const CheckAuth = require('../middlewares/check-auth');
const auth = require('../middlewares/auth')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/add/accounts',CheckAuth, UserController.accountsAdd);
router.get('/view/:id', CheckAuth, UserController.getaccounts);
router.post('/signup', UserController.signup);
router.post('/login',UserController.login);

/*
router.put('/account/update/:id', CheckAuth, UserController.accountsUpdate);
router.put('/account/delete/:id', CheckAuth, UserController.accountDelete);
*/
module.exports = router;
