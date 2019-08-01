const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const http = require('http');
require('dotenv').config()

const port = 8000;
console.log(process.env.MONGOB_URI, "check")

mongoose.connect(process.env.MONGOB_URI);
// On successfull connection
mongoose.connection.on('connected', () => {
	console.log('Connected to Atlas Database')
})
// In case of error
mongoose.connection.on('error', e => {
	console.log('Error: ' + e);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
 var webpack = require("webpack");
 var webpackConfig = require("./webpack.config");
 var compiler = webpack(webpackConfig);

 app.use(
  require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath
  })
 );

 app.use(require("webpack-hot-middleware")(compiler));
}

app.use("/users", require("./server/routes/users"));
app.use("/todo", require("./server/routes/todo"));
app.use(require("./server/routes/index"));

// Creating http server
const server = http.createServer(app);

server.listen(port, () => {
 console.log(`server is running on http://localhost:${port}`);
});