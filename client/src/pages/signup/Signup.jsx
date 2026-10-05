import React, { useState } from "react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";

import toast, {
  Toaster
} from "react-hot-toast";

import { userBaseUrl } from "../../axiosInstance";


const Signup = () => {

  const [signupData, setSignupData] = useState({
    Email: "",
    Password: "",
  });


  const navigate = useNavigate();


  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;


    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const { data } = await userBaseUrl.post(
        "/signup",
        signupData
      );


      if (data?.success) {

        toast.success(
          data?.message || "Signup successful"
        );


        navigate("/signin");

      } else {

        toast.error(
          data?.Message || "Signup failed"
        );

      }


      console.log(data);

    } catch (err) {

      toast.error(
        err?.response?.data?.Message ||
        "Something went wrong"
      );


      console.log(err);

    }

  };


  return (

    <div className="min-h-screen bg-white">

      <Toaster />


      <div className="flex justify-center items-center mt-10 px-4">

        <div className="w-full max-w-md border border-gray-300 rounded-lg p-8 shadow-md">


          <h2 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h2>


          <p className="text-center text-gray-500 mb-7">
            Create your account
          </p>


          <form onSubmit={handleSubmit}>


            {/* Email */}

            <div className="mb-4">

              <label className="block text-lg font-semibold mb-2">
                Email
              </label>


              <input
                type="email"
                name="Email"
                value={signupData.Email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full h-11 border border-gray-400 rounded-md px-3 outline-none focus:border-blue-500"
                required
              />

            </div>


            {/* Password */}

            <div className="mb-4">

              <label className="block text-lg font-semibold mb-2">
                Password
              </label>


              <input
                type="password"
                name="Password"
                value={signupData.Password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full h-11 border border-gray-400 rounded-md px-3 outline-none focus:border-blue-500"
                required
              />

            </div>


            {/* Button */}

            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 border border-gray-500 rounded-md py-2.5 text-lg font-medium cursor-pointer"
            >
              Sign Up
            </button>


          </form>


          <p className="text-center mt-6 text-gray-600">

            Already have an account?{" "}

            <NavLink
              to="/signin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </NavLink>

          </p>


        </div>

      </div>

    </div>

  );

};


export default Signup;