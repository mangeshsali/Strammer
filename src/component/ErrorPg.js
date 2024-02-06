import React from "react";
import { useRouteError } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

export const ErrorPg = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaExclamationCircle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold">Oops...</h1>
      <h2 className="text-xl text-gray-600">Something went wrong!</h2>
      <h3 className="text-lg mt-2">
        Error: {err.status} - {err.statusText}
      </h3>
    </div>
  );
};
