const User = require("../models/User");

exports.handleUsers = async (req, res) => {
  const { command, data } = req.body;
  try {
    switch (command) {
      case "insert":
        const newUser = new User(data);
        await newUser.save();
        return res.json({ message: "User inserted", user: newUser });
      case "select":
        const users = await User.find({});
        return res.json({ users });
      case "update":
        const updated = await User.findByIdAndUpdate(data.id, data, {
          new: true,
        });
        return res.json({ message: "User updated", user: updated });
      case "delete":
        await User.findByIdAndDelete(data.id);
        return res.json({ message: "User deleted" });
      default:
        return res.status(400).json({ message: "Invalid command" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error in userController" });
  }
};
