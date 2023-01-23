import express from "express"

import {
  deleteTodo,
  getTodos,
  insertTodo,
  updateTodo
} from '../controllers/todos.js'

const router = express.Router()

router.get('/', getTodos)
router.post('/', insertTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router;
