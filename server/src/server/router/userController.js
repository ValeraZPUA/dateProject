import {User} from '../models/index.js'

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const user = await User.findAndCountAll();
        res.send(user);
    } catch (e) {

    }
};

module.exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
            .then(find => {
                res.send(find);
            });
    } catch (e) {

    }
};

module.exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
            .then(userCreated => {
                res.send(userCreated);
            })
    } catch (e) {

    }
};

module.exports.updateUser = async (req, res, next) => {
    const user = await User.update(req.body, {where: {id: req.body.id}});
    res.send(user);
};

module.exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.destroy({where: {id: req.params.id}})
            .then(deletedUser => {
                res.send(deletedUser);
            });
    } catch (e) {

    }
};
