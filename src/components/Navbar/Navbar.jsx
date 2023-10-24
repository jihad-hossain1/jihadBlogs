"use client";

import { toast } from "react-hot-toast";
import { NavbarWithMegaMenu } from "./navListMenu";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

import Search from "./search/Search";

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
  const handleToggleSearch = () => {};
  return (
    <div className="">
      <div className="lg:block hidden mx-auto max-w-screen-xl px-6 py-2 mt-2">
        <div className="flex justify-between items-center border-b border-blue-gray-100 pb-4">
          <div>Jihad Blogs</div>
          <div className="flex space-x-1">
            <h4 className="text-blue-gray-500 text-sm ">{`"Modern Javascript"book is available!`}</h4>
            <Link
              href={"#"}
              className="flex space-x-2 text-sm items-center text-blue-gray-900 hover:text-blue-gray-500"
            >
              {" "}
              <span>Check out</span>
              <BiChevronRight />
            </Link>
          </div>
          <div>
            <Search />
          </div>
        </div>
      </div>
      <NavbarWithMegaMenu
        handleLogout={handleLogout}
        user={user}
      ></NavbarWithMegaMenu>
    </div>
  );
};

export default Navbar;
