import {User} from '../models/index.js'
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const fltr = req.paramsFilter;
        const user = await User.findAll({where: fltr});
        res.send(user);
    } catch (e) {
        next(e);
    }
};

module.exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user);
    } catch (e) {
        next(e);
    }
};

module.exports.createUser = async (req, res, next) => {
    const user = new User(req.body);
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
    try {
        const newUser = await user.save();
        res.send(newUser);
    } catch (e) {
        next(e);
    }
};

// module.exports.updateUser = async (req, res, next) => {
//     try {
//         const user = req.body;
//         await User.update(user, {where: {id: user.id}});
//         res.send("updated");
//     } catch (e) {
//         next(e);
//     }
// };

module.exports.updateUser = async (req, res, next) => {
    try {
        const user = req.body;
        await User.update(user, {where: {id: req.params.id}});
        res.send("updated");
    } catch (e) {
        next(e);
    }
};

// module.exports.deleteUser = async (req, res, next) => {
//     try {
//         console.log(req.user);
//         await User.destroy({where: {id: req.user.id}})
//         res.send("deleted");
//     } catch (e) {
//         next(e);
//     }
// };

// module.exports.deleteUser = async (req, res, next) => {
//     try {
//         const user = await User.destroy({where: {id: req.params.id}})
//             .then(deletedUser => {
//                 res.send(user);
//             });
//     } catch (e) {
//         next(e);
//     }
// };

module.exports.deleteUser = async (req, res, next) => {
    try {
        await User.destroy({where: {id: req.params.id}})
        res.send("deleted");
    } catch (e) {
        next(e);
    }
};

module.exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await User.find({where: {email}});
        if(!user) throw new Error("Email or password is not valid");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) throw new Error("Email or password is not valid");

        const token = await jwt.sign(
            {uid: user.id, type: 'access', role: user.role},
            'verysecretkey',
            { expiresIn: '7d' });
        res.send({user, token});
    } catch (e) {
        next(e);
    }
}

