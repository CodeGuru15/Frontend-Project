import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "Yup";

const initialValues = {
  name: "",
  email: "",
  contact: "",
  address: "",
};

const profileSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(15, "Max 15 characters allowed"),
  email: Yup.string().required("Please enter your email"),
  contact: Yup.string()
    .required("Please enter the contact")
    .min(10, "Contact no. must be of 10 characters")
    .max(10, "Contact no. must be of 10 characters"),
  address: Yup.string()
    .required("Please enter the address")
    .min(5, "Address must be at least 2 characters")
    .max(25, "Max 25 characters allowed"),
});

const UpdateProfile = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: profileSchema,
    onSubmit: (values) => {
      formik.resetForm();
      console.log("Form values", values);
    },
  });

  return (
    <div className="flex md:w-[50%] w-[70%] flex-col items-center justify-center h-full">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md shadow-slate-400">
        <h1 className="mb-4 text-xl font-bold text-center md:mb-6 md:text-2xl">
          Update Profile
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-2">
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 md:h-7 sm:text-base">
              {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : null}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 md:h-7 sm:text-base">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">
              Contact No.
            </label>
            <input
              type="number"
              name="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 md:h-7 sm:text-base">
              {formik.errors.contact && formik.touched.contact
                ? formik.errors.contact
                : null}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 md:h-7 sm:text-base">
              {formik.errors.address && formik.touched.address
                ? formik.errors.address
                : null}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded-md sm:text-base hover:bg-blue-600"
          >
            Update
          </button>
        </form>
        <p className="mt-4 text-xs text-center sm:text-base">
          <Link to="/forgotpassword" className="text-blue-500 hover:underline">
            Change Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
