const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/doacao-sangue-front-end"));

app.get("/*", function(req, res) {
  res.sendFile(
    path.join(__dirname + "/dist/doacao-sangue-front-end/index.html")
  );
});

app.listen(8080);
