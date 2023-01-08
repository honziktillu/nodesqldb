const express = require('express');
const router = express.Router();

const userController = require("../controllers/users");

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.postUser);
router.put('/:id', userController.putUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
