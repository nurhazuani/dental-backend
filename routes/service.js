var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/service')

router.get('/:id', serviceController.getService);

router.get('/', serviceController.getAllServicee);

router.post('/', serviceController.createService);

//update appointment by uid
router.patch('/:id', serviceController.updateService) 


router.delete('/:id', serviceController.deleteService);

module.exports = router;
