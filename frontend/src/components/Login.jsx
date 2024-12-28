import { Link, useNavigate } from "react-router-dom";
import illustration from '../assets/images/Login-cuate.svg';
import { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/user/login", payload)
      .then((res) => {
        setLoading(false);
        toast("Login Successfully!")
        console.log("user login done.", res);
        localStorage.setItem('token',JSON.stringify(res.data.token))
        navigate("/home")
      })
      .catch((err) => {
        toast("Invalid Credential")
        console.log("error in registration!", err);
        setLoading(false);
      });
    console.log(payload);
  };
  return (
    <>
      <div className="font-[sans-serif]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email</label>
                  <div className="relative flex items-center">
                    <input 
                    name="email" type="email" 
                    required 
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                     placeholder="Enter user email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}  />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input name="password" 
                    type="password" required
                     className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Enter password" />
                  </div>
                </div>
                <div className="!mt-8">
                  <button type="submit" className="w-full shadow-xl py-3 font-bold px-4 text-sm tracking-wide rounded-lg text-black bg-yellow-400 hover:bg-yellow-400 focus:outline-none">
                  {loading ? "submitting" : "Login"}
                  </button>
                </div>
                <p className="text-sm !mt-8 text-center text-gray-800">
                  Don&apos;t have an account 
                  <Link to="/" className="text-yellow-300 font-semibold hover:underline ml-1 whitespace-nowrap">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
            <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
              <img src={illustration} className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
