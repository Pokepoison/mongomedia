const { User, Thought } = require("../models");

const userController = {
  // get all users
  getUsers: async (req, res) => {
    try {
      const dbUserData = await User.find().select("-__v");
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // get single user by id
  getSingleUser: async (req, res) => {
    try {
      const dbUserData = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a new user/s
  createUser: async (req, res) => {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update a user/s
  updateUser: async (req, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // BONUS delete user and delete associated thoughts
  deleteUser: async (req, res) => {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: req.params.userId });
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      // BONUS get ids of user's `thoughts` and delete them all!!!
      await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add friend to friend list
  addFriend: async (req, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // remove friend from friend list
  removeFriend: async (req, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;

