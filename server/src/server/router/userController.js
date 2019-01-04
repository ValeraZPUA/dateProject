import {User} from '../models/index.js'


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const fltr = req.paramsFilter;
        const user = await User.findAndCountAll({where: fltr});
        res.send(user);
    } catch (e) {
        next(e);
    }
};

module.exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
            .then(find => {
                res.send(find);
            });
    } catch (e) {
        next(e);
    }
};

module.exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
            .then(userCreated => {
                res.send(userCreated);
            })
    } catch (e) {
        next(e);
    }
};

module.exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.update(req.body, {where: {id: req.body.id}});
        res.send(user);
    } catch (e) {
        next(e);
    }
};

module.exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.destroy({where: {id: req.params.id}})
            .then(deletedUser => {
                res.send(user);
            });
    } catch (e) {
        next(e);
    }
};

module.exports.checkPassword = async (req, res, next) => {
    try {
        const user = await User.find(req.params.email);
    } catch (e) {

    }
}

