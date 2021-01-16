const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

const saveToLocalSystem = {
  destination: (req, file, cb) => {
    cb(null, 'uploads/images');
  },
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    // saveToLocalFilesSettings
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, 'placeshub' + uuidv4() + '.' + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('Invalid mime type!');
    cb(error, isValid);
  },
});

module.exports = fileUpload;
