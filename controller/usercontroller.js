var usermodel = require('../model/usermodel');
exports.insert = async (req, res) => {
    var data = await usermodel.create(req.body);
    res.status(200).json({
        status: "success",
        data
    })
}

exports.getdata = async (req, res) => {
    var data = await usermodel.find()
    res.status(200).json({
        status: "success",
        data
    })
}



