"use client";

import AuthProvider from "./AuthProvider";

const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
