import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    
    if(!terms){
      setError("You have to accept our terms and conditions!")
      return;
    }
    if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)){
      setError("Password must be contains a uppercase and a special character and must be 6 characters or longer!")
      return;
    }
    
    setError("")
    createUser(email, password)
      .then((res) => {
        updateUser(res.user, name);
        navigate("/");        
      })
      .catch((err) => {
        setError(err.message);
        e.target.reset();
      });
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="w-2/3 mx-auto my-20 bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-5 text-center">Register Now!</h2>
          <form onSubmit={handleRegister}>
            <input
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-0 mb-5"
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
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
              <div className="mb-5">
                <label className="cursor-pointer">
                  <input type="checkbox" name="terms" /> Accept our terms and
                  conditions.
                </label>
              </div>
              <div onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-2 cursor-pointer">
                {
                  showPassword ? <FaEyeSlash /> : <FaEye />
                }
              </div>
            </div>
            <button className="w-full btn btn-warning mb-5">Register</button>
            <p>
              Already have an account? Please{" "}
              <Link className="text-blue-500 font-bold underline" to="/login">
                Login
              </Link>
            </p>
          </form>
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Register;
