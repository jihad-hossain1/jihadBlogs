import React from "react";
import { PiShoppingCartThin } from "react-icons/pi";
const NavbarSmall = () => {
  return (
    <div className="flex justify-between">
      <ul className="flex">
        <li>start page</li>
        <li>Blog article</li>
        <li>about me</li>
        <li>My projects</li>
        <li>contact me</li>
      </ul>
      <div>
        <PiShoppingCartThin className="text-2xl" />
        Buy products
      </div>
    </div>
  );
};

export default NavbarSmall;
