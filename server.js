var express = require('express');
var app = express();

app.use(express.static(__dirname + "/src"));
app.listen(process.env.PORT || 7000);
console.log("Server up on port 7000");
