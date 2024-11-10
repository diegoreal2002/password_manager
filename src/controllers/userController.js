const { createUser, getUser } = require("../models/userModel");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }
  const existingUser = getUser(username);
  if (existingUser) {
    return res.status(409).send("User already exists.");
  }
  const user = await createUser(username, password);
  res.status(201).send(user);
};

module.exports = { registerUser };
