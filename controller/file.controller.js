exports.uploadFile = (req, res) => {
    if (req.fileUploadError) {
        return res.status(500).send({ message: req.fileUploadError.message });
    }
    if (req.fileValidationError) {
        return res.status(400).send({ message: req.fileValidationError });
    }
    if (!req.file) {
        return res.status(400).send({ message: "Please upload a file!" });
    }
    res.send({
        message: 'File uploaded successfully!',
        filename: req.file.filename
    });
};
