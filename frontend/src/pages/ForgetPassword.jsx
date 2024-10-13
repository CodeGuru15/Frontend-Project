import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    } else {
      setUser("");
      setPassword("");
      setConfirmPassword("");
      console.log(`${user} ${password}`);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">New Password</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-700">Email/Username</label>
            <input
              type="text"
              value={user || ""}
              className="border rounded-md px-4 py-2"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              value={password || ""}
              className="border rounded-md px-4 py-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword || ""}
              className="border rounded-md px-4 py-2"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
          >
            Set New Password
          </button>
        </form>
        <div className=" flex flex-col gap-2">
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="text-center mt-4">
            Back To{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
