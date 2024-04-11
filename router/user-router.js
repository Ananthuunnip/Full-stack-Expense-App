const express = require('express');
const router = express.Router();
userController = require('../controller/expence-controller')

router.use(express.static('public'));

router.get('/',userController.getexpencelist)
router.get('/fetch-expence',userController.getfetchexpence)
router.get('/deleteUser/:id',userController.deleteUser)
router.post('/editExpense/:id', userController.editExpense);
router.post('/addexpence',userController.addexpence)
module.exports = router;
