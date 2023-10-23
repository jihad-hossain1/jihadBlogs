"use client";

import { toast } from "react-hot-toast";
import { NavbarWithMegaMenu } from "./navListMenu";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("LogOut Successfull");
    } catch (error) {
      toast.error(`${error.message} not logOut... please try again`);
    }
  };
  return (
    <div>
      <div></div>
      <NavbarWithMegaMenu
        handleLogout={handleLogout}
        user={user}
      ></NavbarWithMegaMenu>
    </div>
  );
};

export default Navbar;
