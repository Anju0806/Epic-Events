const router = require('express').Router();
const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController');

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend).post(addFriend);

module.exports = router;
