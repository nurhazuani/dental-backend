var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')
var aptController = require('../controllers/appointment')

//add appointment by uid
router.post('/appointment/:uid', aptController.addAppointment);

//display detail n appointment by uid
router.get('/:uid', userController.getUser);

router.get('/', userController.getAllUser);

router.get('/login/:email/:password', userController.getUserLogin);

//list user by role
router.get('/role/:role', userController.getRole);

router.get('/position/:position', userController.getPosition);

router.get('/role/:role/:uid', userController.getRolebyID);

router.post('/', userController.createUser);
router.post('/login?=:email&=:password', userController.enterLogin);

router.patch('/:uid', userController.updateUser) 
router.patch('/:uid/:id/appointment', aptController.updateAppoinment)

router.delete('/:uid', userController.deleteUser);

module.exports = router;
