import { Link } from "react-router-dom";
import * as Yup from "Yup";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(15, "Max 15 characters allowed"),
  email: Yup.string().required("Please enter your email"),
  password: Yup.string()
    .required("Please enter the password")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().required("Please enter the password again"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      setConfirmPassword("");
      console.log("Form values", values);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[80%] max-w-md p-6 bg-white rounded-lg shadow-md shadow-slate-400">
        <h1 className="mb-2 text-xl font-bold text-center md:mb-6 md:text-3xl sm:text-base">
          Sign Up
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-1 md:space-y-4">
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
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
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
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
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
              value={formik.values.password}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
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
              value={formik.confirmPassword}
              onChange={formik.handleChange}
              className="px-4 py-2 border rounded-md"
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
              {formik.values.password != formik.values.confirmPassword &&
              formik.values.confirmPassword &&
              formik.touched.confirmPassword
                ? "Confirmed password does not matched"
                : null}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded-md sm:text-base hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-xs text-center sm:text-base">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
