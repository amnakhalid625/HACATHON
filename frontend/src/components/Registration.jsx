import { Link } from "react-router-dom";
import signUp from "../assets/images/Sign up-cuate.svg";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
  
    const payload = {
      name: name,
      displayName: name,
      email: email,
      password: password,
    };
  
    axios
      .post("http://localhost:4000/user/registor", payload)
      .then((res) => {
        setLoading(false);
        toast("Registration Successfully!");
        console.log("User registered:", res);
  
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        toast("Error in Registration!");
        console.log("Error in registration:", err);
        setLoading(false);
      });
  };
  

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">User name</label>
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter user name"
                />
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter user email"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellow-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="!mt-8">
                <button
                  disabled={loading}
                  type="submit"
                  className="font-bold w-full disabled:opacity-70 shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-black bg-yellow-400 hover:bg-yellow-400 focus:outline-none"
                >
                  {loading ? "Submitting" : "Signup"}
                </button>
              </div>
              <p className="text-sm !mt-8 text-center text-gray-800">
                Do have an account?
                <Link
                  to="/login"
                  className="text-yellow-300 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] hidden md:block">
            <img
              src={signUp}
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
