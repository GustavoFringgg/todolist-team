const Todo = require("./models/todo");
const errorHandle = require("./errorHandle");
const successHandle = require("./successHandle");

function patchTodo(req, res) {
  req.on('end', async () => {

    try {
      const title = JSON.parse(body).title;
      const id = req.url.split("/").pop();
      await Todo.findByIdAndUpdate(id, {
          "title": title
        })
        .then(() => {
          successHandle();
        })
    } catch (error) {
      errorHandle(error);
    }
  })

}

module.exports = patchTodo;