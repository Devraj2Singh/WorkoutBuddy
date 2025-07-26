const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts.js')
const userRoutes = require('./routes/user.js')
const cors = require("cors")

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URL)
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db & listening on port:', process.env.PORT);
    })


module.exports = app;
