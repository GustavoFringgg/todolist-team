const headers = require("./headers");

function errorHandle(res, error) {
  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: "false",
      message: "欄位未填寫正確，或無此 todo ID",
    })
  );
  res.end();
}

module.exports = errorHandle;
