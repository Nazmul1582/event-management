import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section>
        <div className="container mx-auto">
          <div className="w-2/3 mx-auto my-20 bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-5 text-center">
              Please Login!
            </h2>
            <form>
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
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <div className="absolute top-4 right-2 cursor-pointer">
                  <FaEyeSlash /> <FaEye />
                </div>
              </div>
              <button className="w-full btn btn-warning mb-5">Register</button>
              <p>
                If you are new, Please{" "}
                <Link className="text-blue-500 underline" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Login;