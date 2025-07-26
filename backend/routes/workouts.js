const express = require('express')
const router = express.Router()
const {createWorkout, getWorkout, getWorkouts, deleteWorkout,updateWorkout} = require('../controllers/workoutController.js')
const requireAuth = require('../middleware/requireauth.js')

// require auth for all workout routes
router.use(requireAuth)

//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

//Post a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router