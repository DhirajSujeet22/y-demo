const express= require("express");
const path= require("path");
const storeRouter = require("./services/store");
// const userRoutes = require("./services/user");
// const adminRouter = require("./services/admin");
// const ErrorMiddleware = require("./middleware/ErrorMiddleware");
// const adminApiRoutes = require("./routes/admin");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const storeApiRouter = require("./routes/store");
// const session = require('express-session');
const app= express();
require("dotenv").config()

app.set('view engine', 'ejs');
// app.use(express.json())
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'uploads')));
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use((req, res, next) => {
    res.locals.baseUrl = process.env.IMAGE_URL;
    next();
});
app.use(storeRouter)


module.exports = app