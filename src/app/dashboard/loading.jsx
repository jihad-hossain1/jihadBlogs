"use client";

import { Spinner } from "@material-tailwind/react";
// import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-400px)]">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default loading;
