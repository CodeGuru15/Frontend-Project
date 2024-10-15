import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "Yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

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
      <h1 className="text-2xl font-bold text-center text-purple-900 ">
        Welcome to Destion Innovations{" "}
      </h1>
      <div className="w-[80%] max-w-md p-6 bg-white rounded-lg shadow-md shadow-slate-400">
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
            <p className="h-4 text-xs text-red-500 md:h-7 sm:text-base">
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
            <p className="h-4 text-xs text-red-500 md:h-7 sm:text-base">
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
        <div className="p-3 text-xs text-center text-slate-600">
          Or login with
        </div>
        <div className="flex flex-col place-items-center sm:justify-around sm:flex-row">
          <button className="flex items-center justify-center gap-2 px-4 py-2 duration-500 rounded-sm shadow-sm hover:scale-110 shadow-slate-600">
            <span className="text-xl md:text-2xl">
              <FcGoogle />
            </span>
            <span className="text-xs md:text-base">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 duration-500 rounded-sm shadow-sm hover:scale-110 shadow-slate-600">
            <span className="text-xl text-blue-800 md:text-2xl">
              <FaFacebookSquare />
            </span>
            <span className="text-xs md:text-base">Facebook</span>
          </button>
        </div>
        <p className="py-4 text-xs text-center sm:text-base">
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
