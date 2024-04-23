const Todo = require("./models/todo");
const errorHandle = require("./errorHandle");
const successHandle = require("./successHandle");

async function getTodo(req, res) {
  try {
    const todos = await Todo.find()
    successHandle(res, todos)
  } catch (error) {
    errorHandle(error)
  }

}
module.exports = getTodo;