const router = require('express').Router();
const {
 
  addReaction,
  deleteReaction,
} = require('../../controllers/reactionController');


// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction); 

module.exports = router;
