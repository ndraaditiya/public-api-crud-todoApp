import Todo from '../models/todo.js'
import { Types } from "mongoose"

export const getTodos = async (req, res) => {
  try {
    const data = await Todo.find({})
    data.length !== 0 ? res.json({ code: 200, data }) : res.json({ code: 404, message: "Data Not Found, Try to post somthing first." })
  } catch (error) {
    res.json({ code: 505, message: error.message })
  }
}

export const getTodo = async (req, res) => {
  const { id } = req.params
  try {
    if (!Types.ObjectId.isValid(id)) return res.json({ code: 404, message: 'No post with that id.' })
    const data = await Todo.findById(id)
    res.json({ code: 200, data })
  } catch (error) {
    res.json({ code: 505, message: error.message })
  }
}

export const insertTodo = async (req, res) => {
  const todoName = req.body?.todoName
  const isComplete = req.body?.isComplete

  try {
    if (!todoName) return res.json({ code: 400, message: 'Make sure you input the todoName object!' })
    const newTodo = await new Todo({ todoName, isComplete })
    await newTodo.save()
    res.json({ code: 200, data: newTodo })
  } catch (error) {
    res.json({ code: 505, message: error.message })
  }
}

export const updateTodo = async (req, res) => {
  const isComplete = req.body?.isComplete
  const id = req.params?.id

  try {
    if (isComplete == undefined || typeof (isComplete) !== 'boolean') return res.json({ code: 400, message: 'Make sure you input the isComplpete object and give boolean value!' })
    if (!Types.ObjectId.isValid(id)) return res.json({ code: 404, message: 'No post with that id.' })
    const updateTodo = await Todo.findByIdAndUpdate(id, { isComplete, updatedAt: new Date().toISOString(), id }, { new: true })
    res.json({ code: 200, data: updateTodo })
  } catch (error) {
    res.json({ code: 505, message: error.message })
  }
}

export const deleteTodo = async (req, res) => {
  const id = req.params?.id

  try {
    if (!Types.ObjectId.isValid(id)) return res.json({ code: 404, message: 'No post with that id.' })
    await Todo.findByIdAndRemove(id)
    res.json({ code: 200, message: 'Sucessfully deleted todo!' })
  } catch (error) {
    res.json({ code: 505, message: error.message })
  }
}

export const getTodoByDate = async (req, res) => {
  const date1 = req.params?.date1
  const date2 = req.params?.date2

  try {
    if (!date1 || !date2) return res.json({ code: 400, message: 'Make sure you input the two dates.' })
    const data = await Todo.find({ createdAt: { $gte: new Date(date1), $lte: new Date(date2) } })
    data.length === 0 ? res.json({ code: 404, message: `Todos Not Found at ${date1} - ${date2}` }) : res.json({ code: 200, data })
  } catch (error) {
    res.json({ code: 505, message: error.message })
  }
}