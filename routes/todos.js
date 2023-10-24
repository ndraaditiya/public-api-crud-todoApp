import express from 'express'

import {
  deleteTodo,
  getTodo,
  getTodos,
  insertTodo,
  updateTodo,
  getTodoByDate,
} from '../controllers/todos.js'
import { rateLimitChange, rateLimitGet } from '../middleware/ratelimit.js'

const router = express.Router()

router.get('/', rateLimitGet, getTodos)
router.get('/:id', rateLimitGet, getTodo)
router.post('/', rateLimitChange, insertTodo)
router.put('/:id', rateLimitChange, updateTodo)
router.delete('/:id', rateLimitChange, deleteTodo)
router.get('/from/:date1/to/:date2', rateLimitGet, getTodoByDate)

export default router
