import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Schema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("loginUser", values.email);
      resetForm();
    },
  });
  return (
    <div className="hero min-h-screen flex items-center  bg-gradient-to-b from-blue-400/30 to-white">
      <form
        onSubmit={formik.handleSubmit}
        className="md:w-1/2 w-full mx-5  px-3 py-6 rounded-md bg-white md:mx-auto flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-semibold">Sign In</h1>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span
              className={`label-text ${
                formik.errors.email && formik.touched.email && "text-red-500"
              }`}
            >
              Your Email
            </span>
            {formik.errors.email && formik.touched.email && (
              <span className="label-text-alt text-red-500">
                {formik.errors.email}
              </span>
            )}
          </div>
          <input
            id="email"
            name="email"
            type="email"
            className={`input input-bordered w-full max-w-xl ${
              formik.errors.email && formik.touched.email && "input-error"
            }`}
            placeholder="Your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label className="form-control  relative w-full max-w-xl">
          <div className="label">
            <span
              className={`label-text ${
                formik.errors.password &&
                formik.touched.password &&
                "text-red-500"
              }`}
            >
              Password
            </span>
            {formik.errors.password && formik.touched.password && (
              <span className="label-text-alt text-red-500">
                {formik.errors.password}
              </span>
            )}
          </div>
          <input
            id="password"
            name="password"
            type={`${!showPassword ? "password" : "text"}`}
            className={`input input-bordered w-full max-w-xl ${
              formik.errors.password && formik.touched.password && "input-error"
            }`}
            placeholder="*************"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            className="absolute right-4 bottom-4 line-through"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            ) : (
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4.11023C14.79 4.11023 18.17 6.24023 19.82 9.61023C19.23 10.8302 18.4 11.8802 17.41 12.7302L18.82 14.1402C20.21 12.9102 21.31 11.3702 22 9.61023C20.27 5.22023 16 2.11023 11 2.11023C9.73 2.11023 8.51 2.31023 7.36 2.68023L9.01 4.33023C9.66 4.20023 10.32 4.11023 11 4.11023ZM9.93 5.25023L12 7.32023C12.57 7.57023 13.03 8.03023 13.28 8.60023L15.35 10.6702C15.43 10.3302 15.49 9.97023 15.49 9.60023C15.5 7.12023 13.48 5.11023 11 5.11023C10.63 5.11023 10.28 5.16023 9.93 5.25023ZM1.01 1.98023L3.69 4.66023C2.06 5.94023 0.77 7.64023 0 9.61023C1.73 14.0002 6 17.1102 11 17.1102C12.52 17.1102 13.98 16.8202 15.32 16.2902L18.74 19.7102L20.15 18.3002L2.42 0.560226L1.01 1.98023ZM8.51 9.48023L11.12 12.0902C11.08 12.1002 11.04 12.1102 11 12.1102C9.62 12.1102 8.5 10.9902 8.5 9.61023C8.5 9.56023 8.51 9.53023 8.51 9.48023ZM5.11 6.08023L6.86 7.83023C6.63 8.38023 6.5 8.98023 6.5 9.61023C6.5 12.0902 8.52 14.1102 11 14.1102C11.63 14.1102 12.23 13.9802 12.77 13.7502L13.75 14.7302C12.87 14.9702 11.95 15.1102 11 15.1102C7.21 15.1102 3.83 12.9802 2.18 9.61023C2.88 8.18023 3.9 7.00023 5.11 6.08023Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
        </label>

        <button
          type="submit"
          className="btn bg-blue-500 text-white w-full max-w-xl my-3"
        >
          Sign Up
        </button>
        <div className="text-start flex items-center gap-3 w-full max-w-xl">
          <p>Don't Have an Account Yet ?</p>
          <Link to={"/register"} className="text-blue-500 font-bold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
