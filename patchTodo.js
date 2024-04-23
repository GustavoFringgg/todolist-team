const Todo = require("./models/todo");
const errorHandle = require("./errorHandle");
const successHandle = require("./successHandle");

function patchTodo(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const title = JSON.parse(body).title;
      const id = req.url.split("/").pop();
      await Todo.findByIdAndUpdate(id, {
        title: title,
      }).then(() => {
        successHandle(res);
      });
    } catch (error) {
      errorHandle(res);
    }
  });
}

module.exports = patchTodo;
