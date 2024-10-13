import { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";

const ProfileDetails = () => {
  const [edit, setEdit] = useState(false);

  return edit ? (
    <UpdateProfile />
  ) : (
    <div className=" p-4 flex flex-col gap-2 shadow-slate-400 w-[70%] shadow-md md:w-[50%]">
      <h1 className=" text-center md:text-2xl text-xl font-bold p-4">
        Profile Details
      </h1>
      <p className="p-2 md:text-xl">Username : </p>
      <p className="p-2 md:text-xl">Email : </p>
      <p className="p-2 md:text-xl">Contact No. : </p>
      <p className="p-2 md:text-xl">Address : </p>
      <button
        onClick={() => setEdit(true)}
        className=" hover:bg-blue-600 w-full my-2 bg-blue-500 p-2 rounded-md text-white"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileDetails;
