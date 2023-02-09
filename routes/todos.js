import express from "express"

import {
  deleteTodo,
  getTodo,
  getTodos,
  insertTodo,
  updateTodo,
  getTodoByDate
} from '../controllers/todos.js'

const router = express.Router()

router.get('/', getTodos)
router.get('/:id', getTodo)
router.post('/', insertTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)
router.get('/from/:date1/to/:date2', getTodoByDate)

export default router;
