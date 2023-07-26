const  User  = require('../models/User');

module.exports = {
    //create friend
    addFriend(req, res) {
        const friendId  = req.params.friendId;
      
        // First, find the user by their ID (req.params.userId)
        User.findOne({ _id: req.params.userId })
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
      
            // Check if the friendId is already in the user's friends array
            if (user.friends.includes(friendId)) {
              return res.status(400).json({ message: 'Friend already added' });
            }
      
            // Add the friendId to the user's friends array
            user.friends.push(friendId);
      
            // Save the updated user with the new friend added
            return user.save();
          })
          .then((updatedUser) => {
            res.json({ message: 'Friend added successfully', user: updatedUser });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error adding friend' });
          });
      },
      
        //delete user
        deleteFriend(req, res) {
            const userId = req.params.userId;
            const friendId  = req.params.friendId;
          
            // Find the user by their ID (userId)
            User.findOne({ _id: userId })
              .then((user) => {
                if (!user) {
                  return res.status(404).json({ message: 'User not found' });
                }
          
                // Check if the friendId is in the user's friends array
                if (!user.friends.includes(friendId)) {
                  return res.status(400).json({ message: 'Friend not found in user\'s friends list' });
                }
          
                // Remove the friendId from the user's friends array
                user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
          
                // Save the updated user with the friend removed
                return user.save();
              })
              .then((updatedUser) => {
                res.json({ message: 'Friend removed successfully', user: updatedUser });
              })
              .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Error removing friend' });
              });
          },
          
}
          