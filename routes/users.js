
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


router.get('/user', getAllUser);
router.get('/user/:userId', getUser);
router.post('/user', createUser);
router.delete('/user/:userId', deleteUser);
router.put('/user/:userId', updateUser);

module.export = router;
