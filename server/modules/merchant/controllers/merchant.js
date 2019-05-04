const Merchant = require('../models/merchant');
const multer = require('multer');
const {sendQueue, receiveQueue, subQueue, pubQueue} = require('../../../helpers/queue')
const response = require('../../../util/response')

// Store and validation
const multerConf = {
  storage: multer.diskStorage({
    destination: function(req, file, next) {
      next(null,'./public/images')
    },
    filename: function(req, file, next) {
      // console.log(file);
      const ext = file.mimetype.split('/')[1];
      next(null, file.fieldname + '-' + Date.now() + '.' + ext);
    }
  }),
  fileFilter: function(req, file, next) {
    if(!file) {
      next();
    }
    const image = file.mimetype.startsWidth('image/');
    if(image) {
      next(null, true);
    } else {
      next({message: "File type not supported"}, false);
    }
  }
}

// GET home page.
exports.displayImage = async (req, res, next) => {
  
}

exports.getAllMerchant = async (req, res, next) => {
  sendQueue(req.body)
  const merchants = await Merchant.findAll();
  res.send(merchants);
};

exports.addMerchant = async (req, res, next) => {
  const merchantData = {
    name: req.body.name,
    full_name: req.body.fullname,
    tenant_profile_id: req.body.company,
    phone_number: req.body.phoneNumber,
    email: req.body.email,
    role_id: req.body.roleId,
    is_active: req.body.active,
    gender: req.body.gender,
    on_off_order: req.body.orderReady,
    picture_profile: req.body.picture
  }
  sendQueue(merchantData)
  subQueue(merchantData)
  Merchant.create(merchantData)
  if (merchantData) return response.success(`Merchant account has been registered`, res, merchantData)
  return response.serverError(`Failed to register the merchant account`, res, err)
}

exports.updateMerchant = async (req, res, next) => {

}

exports.updateImage = async (req, res, next) => {

}