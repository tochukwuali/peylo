import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, dispatch, isError, isSuccess, navigate, message]);

  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      identifier: email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <ClipLoader size={150} />;
  }

  return (
    <section className="lg:px-40 md:px-20 px-4 py-8 bg-gray-50 h-screen">
      <div className="flex justify-center space-x-8">
        <div className="shadow-lg w-1/2 py-8 mt-12 bg-white rounded-xl">
          <div className="text-center">
            <h3 className="text-gray-700 font-bold text-3xl">Login</h3>
          </div>
          <div>
            <div className="mt-3 px-8 w-full">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    className="block rounded-md border border-gray-200 w-full p-3"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    name="password"
                    id="password"
                    className="block rounded-md border border-gray-200 w-full p-3"
                  />
                </div>
                <div className="mt-5">
                  <button className="bg-gray-500 border-gray-500 p-3 text-white w-full">Submit</button>
                </div>
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
