const errorHandle = require("./errorHandle");
const Todo = require("./models/todo");
const successHandle = require("./successHandle");

async function deleteAllTodos(req, res) {
  try {
    await Todo.deleteMany({});
    successHandle(res);
  } catch (error) {
    errorHandle(res);
  }
}

module.exports = deleteAllTodos;
