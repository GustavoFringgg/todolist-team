const Todo = require("./models/todo");
const errorHandle = require("./errorHandle");
const successHandle = require("./successHandle");

async function deleteTodo(req, res) {
  try {
    const id = req.url.split("/").pop();
    await Todo.findByIdAndDelete(id);
    successHandle(res);
  } catch (error) {
    errorHandle(res);
  }
}

module.exports = deleteTodo;
