import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginUser("");
    setLoginPassword("");
    console.log(`${loginUser} ${loginPassword}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-700">Email/Username</label>
            <input
              type="text"
              value={loginUser}
              className="border rounded-md px-4 py-2"
              onChange={(e) => {
                setLoginUser(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              value={loginPassword}
              className="border rounded-md px-4 py-2"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-end">
            <Link
              to="/forgotpassword"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
