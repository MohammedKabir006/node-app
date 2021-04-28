const express= require('express');
const router = express.Router();


const wformcntrl = require('../controller/wform');

router.get('/fdata', wformcntrl.getWform);
router.post('/fsubmit', wformcntrl.postWform);

module.exports = router;