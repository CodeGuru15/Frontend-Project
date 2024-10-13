import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form validation here
    if (user.password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    } else {
      // Handle successful signup
      setUser({});
      setConfirmPassword("");
      console.log(user);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Username</label>
            <input
              type="text"
              name="name"
              value={user.name || ""}
              onChange={handleChange}
              required={true}
              className="border rounded-md px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email || ""}
              onChange={handleChange}
              required={true}
              className="border rounded-md px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={user.password || ""}
              onChange={handleChange}
              required={true}
              className="border rounded-md px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
              className="border rounded-md px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
