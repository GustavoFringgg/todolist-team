const Todo = require("./models/todo");
const successHandle = require("./successHandle");

async function deleteAllTodos(req, res) {
  try {
    await Todo.deleteMany({});
    successHandle();
  } catch (error) {
    console.log(error);
  }
}

module.exports = deleteAllTodos;
