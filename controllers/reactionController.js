const Thought = require('../models/Thought');

module.exports = {
    addReaction(req, res) {
        const thoughtId = req.params.thoughtId;
        const { reactionBody, username } = req.body;

        // Create the new reaction object
        const newReaction = {
            reactionBody,
            username,
        };
        Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: newReaction } },
            { new: true }
        )
            .then((updatedThought) => {
                if (!updatedThought) {
                    return res.status(404).json({ message: 'Thought not found' });
                }

                res.json({ message: 'Reaction added to thought', thought: updatedThought });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Error adding reaction to thought' });
            });

    },
    deleteReaction(req, res) {
        const { thoughtId } = req.params;
      
        // Find the thought by its ID
        Thought.findById(thoughtId)
          .then((thought) => {
            if (!thought) {
              return res.status(404).json({ message: 'Thought not found' });
            }
      
            // Check if the thought has any reactions
            if (thought.reactions.length === 0) {
              return res.status(404).json({ message: 'No reactions found for the thought' });
            }
      
            // Delete all reactions from the thought
            thought.reactions = [];
      
            // Save the updated thought with the reactions removed
            thought
              .save()
              .then((updatedThought) => {
                res.json({ message: 'All reactions deleted from thought', thought: updatedThought });
              })
              .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Error deleting reactions from thought' });
              });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error finding thought' });
          });
        },
}