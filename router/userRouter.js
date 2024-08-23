const express = require('express')
const router = express.Router();
const userController = require('../controller/userController.js')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './profile/assets/uploads')
    },
    filename: function (req, file, cb) {
      const suffix = file.mimetype.split('/');
      cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
    }
  })

  router.get('/',userController.getUser);
  module.exports = router;