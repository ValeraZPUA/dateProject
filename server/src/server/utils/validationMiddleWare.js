const sequelize = require('sequelize');
const moment = require('moment');

module.exports.filters = (req, res, next) => {
    const parameters = req.query;
    const filterArray = [];
    if (req.user.role == 'moderator' ) {
        //filterArray.push({role: "$ne: admin"});
        filterArray.push({role: "user"});
    } else {
        filterArray.push({role: "user", isBanned: false, isActive: true});
    }
    if (parameters.firstName) {
        filterArray.push({firstName: parameters.firstName});
    }
    if (parameters.lastName) {
        filterArray.push({lastName: parameters.lastName});
    }
    if (parameters.gender) {
        filterArray.push({gender: parameters.gender});
    }
    if (parameters.intention) {
        filterArray.push({intention: parameters.intention});
    }
    if (parameters.minAge) {
        filterArray.push({birthday: {[sequelize.Op.lte]: moment().subtract(parameters.minAge, "year").format("YYYY-MM-DD")}});
    }
    if (parameters.maxAge) {
        filterArray.push({birthday: {[sequelize.Op.gte]: moment().subtract(parameters.maxAge, "year").format("YYYY-MM-DD")}});
    }
    if (parameters.profilePicture) {
        filterArray.push({profilePicture: {[sequelize.Op.not]: null}});
    }
    req.paramsFilter=filterArray;
    next();
}
