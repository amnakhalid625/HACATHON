const express = require('express');
const { v4: uuidv4 } = require('uuid'); 
const Note = require('../models/notes'); 
const router = express.Router();

router.post('/add', async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' });
    }

    const newNote = new Note({
      title,
      description
    });

    await newNote.save();
    res.status(200).json({ success: true, message: 'Note added successfully', note: newNote });
  } catch (error) {
    console.error('Error saving note:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
