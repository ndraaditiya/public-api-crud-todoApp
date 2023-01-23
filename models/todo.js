import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
  todoName: String,
  isComplete: Boolean,
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.model('Todo', todoSchema)