import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notes = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/note/all');
      if (response.data.success) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      toast.error("Error fetching notes!");
    }
  };

  useEffect(() => {
    fetchNotes(); 
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCancel = () => {
    navigate('/home');
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post("http://localhost:4000/api/note/add", {
        title,
        description
      });
      if (response.data.success) {
        fetchNotes();
        toast.success('Note added successfully!'); 
        navigate('/home');
      } else {
        toast.error('Failed to add note!');
      }
    } catch (error) {
      console.error("Error adding note:", error);
      toast.error('Error adding note!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && description) {
      addNote(title, description);
    } else {
      toast.warning('Title and description are required!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add Notes</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add your title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Enter your description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="relative mb-6">
          <button
            type="button"
            onClick={handleDropdownToggle}
            className="text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center w-full"
          >
            Select Option
            <svg
              className="w-4 h-4 ml-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Create Task
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">All Notes</h2>
        {notes.map((note) => (
          <div key={note._id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h3 className="text-lg font-bold text-gray-800">{note.title}</h3>
            <p className="text-gray-600">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
