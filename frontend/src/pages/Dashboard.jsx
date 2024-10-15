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
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [option, setOption] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    console.log("log out successfully");
  };

  const SideBar = () => {
    return (
      <aside className="absolute top-0 left-0 flex-shrink-0 h-screen text-white bg-blue-500 w-52">
        <h1 className="flex items-center justify-between px-3 py-5 font-bold text-center md:text-xl">
          My Dashboard{" "}
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose />
          </button>
        </h1>
        <nav className="text-xs md:text-base">
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
      <aside className="flex-shrink-0 hidden text-white bg-blue-500 md:block w-52">
        <h1 className="py-5 text-xl font-bold text-center">My Dashboard</h1>
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
        <header className="flex items-center justify-between p-4 bg-white shadow-sm shadow-slate-300">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl text-blue-600 md:text-3xl md:hidden"
          >
            <IoMenu />
          </button>
          <h2 className="font-bold md:text-2xl text-slate-800">App Name</h2>
          <div className="flex items-center gap-1">
            <button className="mr-2 text-xl text-blue-500 md:text-2xl hover:text-blue-800">
              <CgProfile />
            </button>
            <button
              onClick={() => setLoggedOut(true)}
              className="text-xl text-blue-600 md:text-3xl "
            >
              <IoIosLogOut />
            </button>
          </div>
          {loggedOut && (
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-2 text-xl text-white backdrop-blur-sm bg-white/20">
              <div className="p-4 text-base rounded-md md:text-xl backdrop-blur-sm bg-black/50">
                <div>Are you sure ?</div>
                <div className="flex gap-5 ">
                  <Link to="/" onClick={handleLogout}>
                    Ok
                  </Link>
                  <button onClick={() => setLoggedOut(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </header>

        <div className="flex items-center justify-center flex-grow ">
          {option === "profile" && <ProfileDetails />}
          {option === "dashboard" && <UserDashboard />}
          {option === "setting" && <Settings />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
