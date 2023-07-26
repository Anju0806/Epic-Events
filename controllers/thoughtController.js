const Thought = require('../models/Thought');
const User = require('../models/User');
module.exports = {
  //get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => {
        if (thoughts.length === 0) {
          // If no thoughts found, send a 404 response with a message
          res.status(404).json({ message: 'No thoughts yet' });

        } else {
          // If thoughts found, send the users in the response
          res.json(thoughts);
        }
      })
      .catch((err) => res.status(500).json(err));

  },

  //get one thought
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          // If no thought found, send a 404 response with a message
          res.status(404).json({ message: 'No thought found with the provided thoughtId' });
        } else {
          // If a user is found, send the user data in the response
          res.json(thought);
        }
      })
      .catch((err) => res.status(500).json(err));

  },

  addThought(req, res) {
    // Create the thought first
    Thought.create(req.body)
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.json({ message: 'Error: Thought not created!' });
        }
  
        // Update the user with the new thought ID
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }
  
        res.json({ message: 'Thought successfully created!' });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error adding Thought into user' });
      });
  },
    
  
}