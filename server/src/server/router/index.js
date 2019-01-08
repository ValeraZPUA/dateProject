import express from 'express';
import "babel-polyfill";
import {User} from '../models/index.js'


const validationMiddleWare = require('../utils/validationMiddleWare');
const userController = require('./userController');
const photosController = require('./photosController');
const authRequired = require('../utils/authRequired');
const roleCheck = require('../utils/roleCheck');
const router = express.Router();

router.get('/api/user', authRequired, validationMiddleWare.filters, userController.getAllUsers);
router.get('/api/user/:id', authRequired, userController.getUserById);
router.post('/api/user', userController.createUser);
router.put('/api/user/:id', authRequired, roleCheck, userController.updateUser);
router.delete('/api/user/:id', authRequired, roleCheck, userController.deleteUser);
router.post('/api/login', userController.login);

router.post('/api/photo/upload/:id', authRequired, roleCheck, photosController.uploadPhoto);
router.put('/api/photo/update/:userID', authRequired, roleCheck, photosController.updatePhoto);
router.get('/api/photo/get/:userID', authRequired, photosController.getAllUserPhoto);
router.delete('/api/photo/delete/:id&photoName', authRequired, photosController.deletePhoto);

module.exports = router;

