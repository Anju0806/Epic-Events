const  User  = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {

    //get all users
    getUsers(req, res) {
        User.find()
          .then((users) => {
            if (users.length === 0) {
              // If no users found, send a 404 response with a message
              res.status(404).json({ message: 'No users yet' });
            } else {
              // If users found, send the users in the response
              res.json(users);
            }
          })
          .catch((err) => res.status(500).json(err));
      },
      
    //get one user
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .then((user) => {
            if (!user) {
              // If no user found, send a 404 response with a message
              res.status(404).json({ message: 'No user found with the provided userId' });
            } else {
              // If a user is found, send the user data in the response
              res.json(user);
            }
          })
          .catch((err) => res.status(500).json(err));
      },      
    //create user
    addUser(req, res) {
        User.create(req.body)
          .then((user) => {
            // Check if user is truthy to ensure successful creation
            if (user) {
              res.json({ message: 'User created', user: user });
            } else {
              // This block will be executed only in case of unexpected issues
              res.status(404).json({ message: 'User not created' });
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error creating user' });
          });
      },
      
    //update user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.body.userId }, req.body, { new: true })
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User updated', user: user });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error updating user' });
          });
      },
      
    //delete user
    deleteUser(req, res) {
      const { userId } = req.params;
    
      User.findOneAndDelete({ _id: userId })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          const thoughtIdsToDelete = user.thoughts; 
          Thought.deleteMany({ _id: { $in: thoughtIdsToDelete } })
            .then(() => {
              res.json({ message: 'User and their thoughts have been deleted' });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({ message: 'Error deleting thoughts of the user' });
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ message: 'Error deleting user' });
        })
    },
               
}