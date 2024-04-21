const mongoose = require("mongoose");
const Todo = require("./models/todo");
const errorHandle = require("./errorHandle");
const { v4: uuidv4 } = require("uuid");
const successHandle = require("./successHandle");

function postTodo(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const title = JSON.parse(body).title;

      if (title != undefined) {
        const new_todo = await Todo.create({
          title,
        });
        successHandle(res, new_todo);
      } else errorHandle(res);
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = postTodo;
