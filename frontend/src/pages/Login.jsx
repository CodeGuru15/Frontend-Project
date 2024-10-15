import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "Yup";

const initialValues = {
  user: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  user: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(15, "Max 15 characters allowed"),
  password: Yup.string()
    .required("Please enter the password")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      formik.resetForm();
      console.log("Form values", values);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[80%] max-w-md p-6 bg-white rounded-lg shadow-md shadow-slate-300">
        <h1 className="mb-4 text-2xl font-bold text-center md:mb-6 md:text-3xl">
          Login
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
          <div className="flex justify-end text-xs sm:text-base">
            <Link
              to="/forgotpassword"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-xs text-center sm:text-base">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
