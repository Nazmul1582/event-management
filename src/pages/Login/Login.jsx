import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, loginWithGoogle } = useAuth();
//   const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    login(email, password)
      .then(() => {
        toast.success("Logged in Successfully!")
        e.target.reset();
        // navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        e.target.reset();
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
    .then(res => {
        console.log(res.user);
        toast.success("Logged in Successfully!")
        // navigate("/")
    })
    .catch(err => {
        setError(err.message)
    })
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full md:w-2/3 mx-auto my-20 bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-5 text-center">Please Login!</h2>
          <form onSubmit={handleLogin}>
            <input
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-0 mb-5"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <div className="relative">
              <input
                className="w-full border border-gray-200 p-3 rounded-lg focus:outline-0 mb-5"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
              />
              <div onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-2 cursor-pointer">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button className="w-full btn btn-warning mb-5">Login</button>
            <p>
              If you are new, Please{" "}
              <Link
                className="text-blue-500 font-bold underline"
                to="/register"
              >
                Register
              </Link>
            </p>
          </form>
          {/* divider */}
          <div className="flex items-center mb-5">
            <div className="flex-grow border-t"></div>
            <span className="mx-3 text-lg font-semibold">or</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* login with google */}
          <div className="grid place-items-center">
            <button onClick={handleLoginWithGoogle} className="btn btn-outline btn-warning mb-3">
              <FaGoogle className="text-2xl" />
              Login With Google
            </button>
          </div>
          <Toaster />
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Login;
