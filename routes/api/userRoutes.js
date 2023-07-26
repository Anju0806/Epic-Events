const router = require('express').Router();
const {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(addUser).put(updateUser); 

///api/users/:userId
router.route('/:userId').get(getUser).delete(deleteUser); 

module.exports = router;
