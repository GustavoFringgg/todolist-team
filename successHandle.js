const headers = require("./headers");

function successHandle(res, data) {
  res.writeHead(200, headers);
  res.write(
    JSON.stringify({
      status: "scccess",
      data,
    })
  );
  res.end();
}

module.exports = successHandle;
