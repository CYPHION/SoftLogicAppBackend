const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
        req.fileValidationError = "Only image files are allowed!";
        return cb(null, false, new Error("Only image files are allowed!"));
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 100000000 }
});

exports.uploadSingleImage = (req, res, next) => {
    const uploader = upload.single('file');
    uploader(req, res, function (error) {
        if (error instanceof multer.MulterError) {
            req.fileUploadError = error;
        } else if (error) {
            req.fileUploadError = error;
        }
        next();
    });
};
