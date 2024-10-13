import { useState } from "react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({});

    console.log(user);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-slate-400 shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>
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
            <label className="text-gray-700">Contact No.</label>
            <input
              type="number"
              name="contact"
              value={user.contact || ""}
              onChange={handleChange}
              required={true}
              className="border rounded-md px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={user.address || ""}
              onChange={handleChange}
              required={true}
              className="border rounded-md px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
          >
            Update
          </button>
        </form>
        <p className="text-center mt-4">
          <Link to="/forgotpassword" className="text-blue-500 hover:underline">
            Change Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
