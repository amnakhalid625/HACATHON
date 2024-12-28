const Notes = require('../models/notes');

// Create a new note
const createNote = async (req, res) => {
  try {
    const { noteId, title, content, subject } = req.body;
    const createdBy = req.user.id; // Assuming `req.user.id` contains the authenticated user's ID

    const newNote = new Notes({
      noteId,
      title,
      content,
      subject,
      createdBy,
    });

    await newNote.save();
    res.status(201).json({ message: 'Note created successfully', data: newNote });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create note', error });
  }
};

// Get all notes
const getNotes = async (req, res) => {
  try {
    const createdBy = req.user.id; // Fetch notes only for the authenticated user
    const notes = await Notes.find({ createdBy });
    res.status(200).json({ message: 'Notes fetched successfully', data: notes });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notes', error });
  }
};

// Get a single note by ID
const getNoteById = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note fetched successfully', data: note });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch note', error });
  }
};

// Update a note
const updateNote = async (req, res) => {
  try {
    const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note updated successfully', data: updatedNote });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update note', error });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully', data: deletedNote });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete note', error });
  }
};

module.exports = { createNote, getNotes, getNoteById, updateNote, deleteNote };
