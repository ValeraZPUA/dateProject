import express from 'express';
import "babel-polyfill";
import {User} from '../models/index.js'

import multer from 'multer';

const validationMiddleWare = require('../utils/validationMiddleWare');
const userController = require('./userController');
const photosController = require('./photosController');
const router = express.Router();

router.get('/api/user', validationMiddleWare.filters, userController.getAllUsers);
router.get('/api/user/:id', userController.getUserById);
router.post('/api/user', userController.createUser);
router.put('/api/user', userController.updateUser);
router.delete('/api/user/:id', userController.deleteUser);

router.post('/api/upload', photosController.uploadPhoto);


module.exports = router;
