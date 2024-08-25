import { Note } from "../models/notes.model.js"

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({})
    res.status(200).json({
      message: "Notes fetched successfully",
      data: notes,
    })
  } catch (error) {
    console.log(error.message)
  }
}

const createNote = async (req, res) => {
  const { title, content } = req.body

  const note = await Note.create({
    title,
    content,
  })

  res.status(201).json({
    message: "Note created successfully",
    data: note,
  })
}

const updateNote = async (req, res) => {
  const { title, content } = req.body
  const noteId = req.params.id
  try {
    const note = await Note.findByIdAndUpdate(
      { _id: noteId },
      { title: title, content: content }
    )
    res.json({
      message: "Note updated successfully",
      data: note,
    })
  } catch (error) {}
}

const deleteNote = async (req, res) => {
  const noteId = req.params.id
  try {
    const note = await Note.findByIdAndDelete({ _id: noteId })
    res.json({
      message: "Note deleted successfully",
      data: note,
    })
  } catch (error) {}
}

export { getNotes, createNote, updateNote, deleteNote }
