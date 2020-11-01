var express = require('express');
var router = express.Router();
var aptController = require('../controllers/appointment')
var userController = require('../controllers/user')


//get all appointmnet by user id
router.get('/:uid', aptController.getAppointment);

router.get('/', aptController.getAllAppointment);

//cust apply appointmnt
router.post('/:uid', aptController.addAppointment);

//update appointment by uid
router.patch('/:uid/:id', aptController.updateAppoinment) 


router.delete('/:uid/:id', aptController.deleteAppointment);

module.exports = router;
