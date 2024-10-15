import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "Yup";
import { useState } from "react";

const initialValues = {
  user: "",
  password: "",
  confirmPassword: "",
};

const forgotPasswordSchema = Yup.object().shape({
  user: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(15, "Max 15 characters allowed"),
  password: Yup.string()
    .required("Please enter the password")
    .min(8, "Password must be at least 8 characters"),
});
const ForgotPassword = () => {
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      if (formik.values.password != formik.values.confirmPassword) {
        setError(true);
      } else {
        formik.resetForm();
        setError(false);
        console.log("Form values", values);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-xl font-bold text-center md:text-3xl">
          New Password
        </h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">
              Email/Username
            </label>
            <input
              type="text"
              name="user"
              id="user"
              value={formik.values.user}
              className="px-4 py-2 border rounded-md"
              onChange={formik.handleChange}
            />
            <p className="text-xs text-red-500 h-7 sm:text-base">
              {formik.errors.user && formik.touched.user
                ? formik.errors.user
                : null}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              className="px-4 py-2 border rounded-md"
              onChange={formik.handleChange}
            />
            <p className="text-xs text-red-500 h-7 sm:text-base">
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : null}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-700 sm:text-base">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              className="px-4 py-2 border rounded-md"
              onChange={formik.handleChange}
            />
            <p className="text-xs text-red-500 h-7 sm:text-base">
              {error ? "Confirmed password not matched" : null}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded-md sm:text-base hover:bg-blue-600"
          >
            Set New Password
          </button>
        </form>
        <div className="flex flex-col ">
          <p className="mt-4 text-xs text-center sm:text-base">
            Back To{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
