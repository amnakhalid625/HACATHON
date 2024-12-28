import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';
import Registration from './components/Registration';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster} from 'react-hot-toast';
import Notes from "./components/Notes";


function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Toaster />

        <Routes>
          {/* Protected Route for Profile */}
          <Route element={<ProtectedRoute />}>
          </Route>

          {/* Public Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notes" element={<Notes />} />

        </Routes>
        {/* <ToastContainer /> */}
      </Router>
    </>
  );
}

export default App;
