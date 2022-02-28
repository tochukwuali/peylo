import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Home = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="lg:px-40 md:px-20 px-4 py-8 bg-gray-50 h-screen">
      <div className="flex justify-center space-x-8 h-full">
        <div className="shadow-lg w-1/2 h-2/5 py-8 mt-24 bg-white rounded-xl">
          <div className="text-center">
            <h3 className="text-gray-700 font-bold text-3xl">Login</h3>
          </div>
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                />
                <input
                  type="password"
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                />
              </form>
            </div>
            <div className="px-20 mt-12 flex justify-between">
              <Link to="/">
                <div className="bg-gray-800 text-white hover:text-gray-200 hover:bg-gray-700 w-36 py-3 flex items-center justify-center rounded-full">
                  <p>View as Demo</p>
                </div>
              </Link>
              <div className="bg-white shadow-md text-black hover:text-gray-200 hover:bg-gray-700 w-44 px-2 flex items-center space-x-2 justify-center rounded-full">
                <p>Login with google</p>
                <FcGoogle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
