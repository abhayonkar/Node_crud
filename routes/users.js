const controller = require('../controllers/users');
const router = require('express').Router();

//CRUD routes /users
router.get('/',controller.getUsers);
router.get('/:userid',controller.getUser);
router.post('/',controller.createUser);
router.put('/:userid',controller.updateUser);
router.delete('/:userid',controller.deleteUser);

