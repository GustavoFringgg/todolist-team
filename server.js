const http = require("http");
const {
  v4: uuidv4
} = require("uuid");
const mongoose = require("mongoose");
const errorHandle = require("./errorHandle");
const Todo = require("./models/todo");
const headers = require("./headers");
const todos = [];
const postTodo = require("./postTodo");
const dotenv = require("dotenv");
const deleteAllTodos = require("./deleteAllTodos");
const deleteTodo = require("./deleteTodo");
const getTodo = require("./getTodo");
const patchTodo = require("./patchTodo");

dotenv.config({
  path: "./config.env"
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("資料庫連線成功");
  })
  .catch((error) => {
    console.log(error);
  });

const requestListener = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  if (req.url == "/todos" && req.method == "GET") {
    getTodo(req, res)
  } else if (req.url == "/todos" && req.method == "POST") {
    postTodo(req, res);
  } else if (req.url == "/todos" && req.method == "DELETE") {
    deleteAllTodos(req, res);
  } else if (req.url.startsWith("/todos/") && req.method == "DELETE") {
    deleteTodo(req, res);
  } else if (req.url.startsWith("/todos/") && req.method == "PATCH") {
    patchTodo(req, res);
  } else if (req.method == "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.write(
      JSON.stringify({
        status: "false",
        message: "無此網站路由",
      })
    );
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3000);
console.log("server get");