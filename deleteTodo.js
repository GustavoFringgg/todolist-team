const Todo = require("./models/todo");
const errorHandle = require("./errorHandle");
const successHandle = require("./successHandle");

function deleteTodo(req, res) {
  const id = req.url.split("/").pop();
  try {
    Todo.findByIdAndDelete(id);
    successHandle();
  } catch (error) {
    errorHandle(error);
  }
}

module.exports = deleteTodo;
