import express from 'express';
import "babel-polyfill";
import {User} from '../models/index.js'

const userController = require('./userController');

const router = express.Router();


router.get('/api/user', userController.getAllUsers);
router.get('/api/user/:id', userController.getUserById);
router.post('/api/user', userController.createUser());
//router.put('/api/user', userController.updateUser());
//router.delete('/api/user/:id', userController.deleteUser());

module.exports = router;
// router.post(
//   "/api/hello",
//   async (req, res) => {
//     res.send("hello");
//   });
//
// router.get('/api/user', async (req, res, next) => {
//     try {
//         const user = await User.findAndCountAll();
//         res.send(user);
//     } catch (e) {
//
//     }
// });
//
// router.get('/api/user/:id', async (req, res, next) => {
//     try {
//         // const user = await User.findById(req.params.id);
//         // res.send(user);
//         const user = await User.findById(req.params.id)
//             .then(find => {
//                 res.send(find);
//             });
//     } catch (e) {
//
//     }
// });
//
// router.post('/api/user', async (req, res, next) => {
//     try {
//         const user = await User.create(req.body)
//             .then(userCreated => {
//                 res.send(userCreated);
//             })
//     } catch (e) {
//
//     }
// });
//
// router.put('/api/user', async (req, res, next) => {
//     const user = await User.update(req.body, {where: {id: req.body.id}});
//     res.send(user);
// });
//
// router.delete('/api/user/:id', async (req, res, next) => {
//     try {
//         const user = await User.destroy({where: {id: req.params.id}})
//             .then(deletedUser => {
//                 res.send(user);
//             });
//     } catch (e) {
//
//     }
// });











