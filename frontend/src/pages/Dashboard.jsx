import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import UserDashboard from "../components/UserDashboard";
import Settings from "../components/Settings";
import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import MenuItem from "../components/MenuItem";
import ProfileDetails from "../components/ProfileDetails";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Dashboard = () => {
  const [option, setOption] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log("log out successfully");
  };

  const SideBar = () => {
    return (
      <aside className=" absolute top-0 left-0 h-screen bg-blue-500 text-white w-52 flex-shrink-0">
        <h1 className="text-xl flex items-center justify-between px-3 font-bold text-center py-5">
          My Dashboard{" "}
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose />
          </button>
        </h1>
        <nav className="">
          <ul className="space-y-2">
            <li>
              <MenuItem
                name="Dashboard"
                icon={<MdDashboard />}
                handleClick={() => {
                  setOption("dashboard");
                  setIsOpen(false);
                }}
              />
            </li>
            <li>
              <MenuItem
                name="Profile"
                icon={<FaUser />}
                handleClick={() => {
                  setOption("profile");
                  setIsOpen(false);
                }}
              />
            </li>
            <li>
              <MenuItem
                name="Settings"
                icon={<IoIosSettings />}
                handleClick={() => {
                  setOption("setting");
                  setIsOpen(false);
                }}
              />
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  return (
    <div className="flex h-screen">
      <aside className=" hidden md:block bg-blue-500 text-white w-52 flex-shrink-0">
        <h1 className="text-xl font-bold text-center py-5">My Dashboard</h1>
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
      {isOpen && <SideBar />}
      <main className="flex flex-col flex-grow">
        <header className="bg-white p-4 flex justify-between items-center border">
          <button
            onClick={() => setIsOpen(true)}
            className=" md:hidden text-3xl text-blue-600"
          >
            <IoMenu />
          </button>
          <h2 className="text-2xl text-slate-800 font-bold">App Name</h2>
          <div className="flex items-center gap-1">
            <button className="mr-2 text-blue-500 text-2xl hover:text-blue-800">
              <CgProfile />
            </button>
            <button onClick={handleLogout} className=" text-blue-600 text-3xl">
              <IoIosLogOut />
            </button>
          </div>
        </header>

        <div className=" flex-grow flex justify-center items-center">
          {option === "profile" && <ProfileDetails />}
          {option === "dashboard" && <UserDashboard />}
          {option === "setting" && <Settings />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
