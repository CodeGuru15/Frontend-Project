import { MdVerifiedUser } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { SiAuth0 } from "react-icons/si";

const Settings = () => {
  return (
    <div className=" p-4 flex flex-col gap-2 shadow-slate-400 w-[70%] shadow-md md:w-[50%]">
      <h1 className=" text-center md:text-2xl text-xl font-bold p-4">
        Account Settings
      </h1>
      <div className="p-2 md:text-xl flex justify-between items-center">
        <span className=" flex items-center gap-1">
          <MdVerifiedUser />
          Verification{" "}
        </span>
        <div className="flex justify-center gap-2">
          <input type="checkbox" name="email" defaultChecked />
          Email
          <input type="checkbox" name="contact" />
          Contact No.
        </div>
      </div>
      <div className="p-2 md:text-xl flex justify-between items-center">
        <span className=" flex items-center gap-1">
          <IoMdNotifications />
          Notification{" "}
        </span>

        <div className="flex justify-center gap-2">
          <input type="radio" name="notify" />
          OFF
          <input type="radio" name="notify" defaultChecked={true} />
          ON
        </div>
      </div>
      <div className="p-2 md:text-xl flex justify-between items-center">
        <span className=" flex items-center gap-1">
          <SiAuth0 />
          Two Factor Authentication{" "}
        </span>

        <div className="flex justify-center gap-2">
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
