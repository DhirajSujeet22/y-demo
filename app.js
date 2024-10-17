

const app= require("./index")
require("dotenv").config();


app.listen(process.env.PORT,()=> console.log(`server running on Port ${process.env.PORT}`))