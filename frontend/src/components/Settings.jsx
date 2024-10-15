import { MdVerifiedUser } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { SiAuth0 } from "react-icons/si";

const Settings = () => {
  return (
    <div className=" p-4 flex flex-col gap-2 shadow-slate-400 w-[80%] shadow-md md:w-[50%]">
      <h1 className="p-4 font-bold text-center md:text-2xl">
        Account Settings
      </h1>
      <div className="flex flex-col items-center p-2 text-xs md:justify-between md:flex-row md:text-xl">
        <span className="flex items-center gap-1 p-2">
          <MdVerifiedUser />
          Verification{" "}
        </span>
        <div className="flex justify-center gap-2 text-xs">
          <input type="checkbox" name="email" defaultChecked />
          Email
          <input type="checkbox" name="contact" />
          Contact No.
        </div>
      </div>
      <div className="flex flex-col items-center p-2 text-xs md:justify-between md:flex-row md:text-xl">
        <span className="flex items-center gap-1 p-2">
          <IoMdNotifications />
          Notification{" "}
        </span>

        <div className="flex justify-center gap-2 text-xs">
          <input type="radio" name="notify" />
          OFF
          <input type="radio" name="notify" defaultChecked={true} />
          ON
        </div>
      </div>
      <div className="flex flex-col items-center p-2 text-xs md:justify-between md:flex-row md:text-xl">
        <span className="flex items-center gap-1 p-2">
          <SiAuth0 />
          Two Factor Authentication{" "}
        </span>

        <div className="flex justify-center gap-2 text-xs">
          <input type="radio" name="auth" defaultChecked={true} />
          OFF
          <input type="radio" name="auth" />
          ON
        </div>
      </div>
    </div>
  );
};

export default Settings;
