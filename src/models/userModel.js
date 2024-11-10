const bcrypt = require("bcrypt");

const users = [];

const createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  console.log(users);
  return { username };
};

const getUser = (username) => users.find((user) => user.username === username);

module.exports = { createUser, getUser };
