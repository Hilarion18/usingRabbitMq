const router = require('express').Router();
const merchantController = require('../modules/merchant/controllers/merchant');

router.get('/', merchantController.getAllMerchant);
router.post('/', merchantController.addMerchant)

module.exports = router;