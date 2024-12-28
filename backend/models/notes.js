const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const noteSchema = new mongoose.Schema(
  {
    noteId: {
      type: String, 
      unique: true, 
      default: uuidv4, 
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true } 
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
