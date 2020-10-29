var express = require('express');
var router = express.Router();
var aptController = require('../controllers/appointment')
var userController = require('../controllers/user')

router.get('/:id', aptController.getAppointment);

router.get('/', aptController.getAllAppointment);

router.post('/:uid', aptController.addAppointment);

//update appointment by uid
router.patch('/:uid/:id', aptController.updateAppoinment) 


router.delete('/:id', aptController.deleteAppointment);

module.exports = router;
