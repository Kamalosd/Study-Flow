import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {" "}
      <div className="text-center">
        {" "}
        <h1 className="text-8xl font-bold text-blue-600"> 404 </h1>{" "}
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          {" "}
          Page Not Found{" "}
        </h2>{" "}
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          {" "}
          Sorry, the page you are looking for does not exist or may have been
          moved.{" "}
        </p>{" "}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {" "}
          Go to Home{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};
export default PageNotFound;
