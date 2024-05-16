const asyncHandler = require("../utils/asyncHandler");
const briefFormServices = require("../services/briefForm.service")
exports.createBriefForm = asyncHandler(async (req, res, next) => {
    const data = await briefFormServices.createForm(req.body)

    return res.send({
        data,
        message: 'Form Submitted',
    });
})
