const express = require('express')
const router = express.Router();
const fieldController = require('../Controller/fieldController')

router.get('/list', fieldController.listField)
router.post('/post', fieldController.AddField)

module.exports = router;