const BriefForm = require('../model/briefForm.model')


exports.createForm = async (data) => {
    return BriefForm.create(data);
}