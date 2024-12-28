import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/images/Add tasks-cuate.svg';
import Navbar from './Navbar';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  const addNotes = async (title, description) => {
    try {
      const response = await axios.post("http://localhost:4000/api/note/add", {
        title,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        console.log("Note added successfully");
      } else {
        console.error("Failed to add note:", response.data.message);
      }
    } catch (error) {
      console.error("Error while adding note:", error);
    }
  };

  const clickHandler = async () => {
    await addNotes("New Note Title", "New Note Description");
    navigate('/notes');
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-8 py-10 px-5">
        <div className="w-full max-w-md mx-auto">
          <img src={homeImage} alt="home-img" className="w-full h-auto" />
        </div>

        <button
          onClick={clickHandler}
          className="bg-yellow-400 text-white py-2 px-6 rounded-full text-lg hover:bg-yellow-500 transition duration-300"
        >
          Add Tasks
        </button>
      </div>
    </>
  );
};

export default Home;
