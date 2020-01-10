//Required Packages
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

//Define Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Static Routes
if (process.env.NODE_ENV === "prouction") {
    app.use(express.static("client/build"));
}

//Add Routes
app.use(routes);

//Start Server
app.listen(PORT, function() {
    console.log(`🌎 ==> API Server Now Listening on PORT ${PORT}!`);
})

