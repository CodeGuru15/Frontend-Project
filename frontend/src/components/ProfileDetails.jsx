import { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";

const ProfileDetails = () => {
  const [edit, setEdit] = useState(false);

  return edit ? (
    <UpdateProfile />
  ) : (
    <div className=" p-4 flex flex-col gap-2 shadow-slate-400 w-[80%] shadow-md md:w-[50%]">
      <h1 className="p-4 text-xl font-bold text-center md:text-2xl">
        Profile Details
      </h1>
      <p className="p-2 text-xs md:text-xl">Username : </p>
      <p className="p-2 text-xs md:text-xl">Email : </p>
      <p className="p-2 text-xs md:text-xl">Contact No. : </p>
      <p className="p-2 text-xs md:text-xl">Address : </p>
      <button
        onClick={() => setEdit(true)}
        className="w-full p-2 my-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileDetails;
