import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Profile from "../components/Profile";
import { useState } from "react";
import UserDashboard from "../components/UserDashboard";
import Settings from "../components/Settings";
import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import MenuItem from "../components/MenuItem";

const Dashboard = () => {
  const [option, setOption] = useState("dashboard");
  return (
    <div className="flex h-screen">
      <aside className=" bg-blue-500 text-white w-52 flex-shrink-0">
        <h1 className="text-xl font-bold text-center py-4">My Dashboard</h1>
        <nav className="">
          <ul className="space-y-2">
            <li>
              <MenuItem
                name="Dashboard"
                icon={<MdDashboard />}
                handleClick={() => setOption("dashboard")}
              />
            </li>
            <li>
              <MenuItem
                name="Profile"
                icon={<FaUser />}
                handleClick={() => setOption("profile")}
              />
            </li>
            <li>
              <MenuItem
                name="Settings"
                icon={<IoIosSettings />}
                handleClick={() => setOption("setting")}
              />
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex flex-col flex-grow">
        <header className="bg-white p-4 flex justify-between">
          <h2 className="text-2xl text-slate-800 font-bold">App Name</h2>
          <div className="flex items-center">
            <button className="mr-2 text-blue-500 text-2xl">
              <CgProfile />
            </button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              Logout
            </button>
          </div>
        </header>

        <div className=" flex-grow flex justify-center items-center">
          {option === "profile" && <Profile />}
          {option === "dashboard" && <UserDashboard />}
          {option === "setting" && <Settings />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
