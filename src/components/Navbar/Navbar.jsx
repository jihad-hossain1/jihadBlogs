"use client";
import React, { useState } from "react";
// import Container from "../Container/Container";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { Button } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "./navListMenu";

const Navbar = () => {
  return (
    <div>
      <NavbarWithMegaMenu></NavbarWithMegaMenu>
    </div>
    // <>
    //   <Menu
    //     open={isMenuOpen}
    //     handler={setIsMenuOpen}
    //     offset={{ mainAxis: 20 }}
    //     placement="bottom"
    //     allowHover={true}
    //   >
    //     <MenuHandler>
    //       <Typography as="div" variant="small" className="font-normal">
    //         <ListItem
    //           className="flex items-center gap-2 py-2 pr-4"
    //           selected={isMenuOpen || isMobileMenuOpen}
    //           onClick={() => setIsMobileMenuOpen((cur) => !cur)}
    //         >
    //           <Square3Stack3DIcon className="h-[18px] w-[18px]" />
    //           Resources
    //           <ChevronDownIcon
    //             strokeWidth={2.5}
    //             className={`hidden h-3 w-3 transition-transform lg:block ${
    //               isMenuOpen ? "rotate-180" : ""
    //             }`}
    //           />
    //           <ChevronDownIcon
    //             strokeWidth={2.5}
    //             className={`block h-3 w-3 transition-transform lg:hidden ${
    //               isMobileMenuOpen ? "rotate-180" : ""
    //             }`}
    //           />
    //         </ListItem>
    //       </Typography>
    //     </MenuHandler>
    //     <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
    //       <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
    //     </MenuList>
    //   </Menu>
    //   <div className="block lg:hidden">
    //     <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
    //   </div>
    // </>
  );
};

// <div className="max-w-[1200px] mx-auto">
//   <div className="flex justify-between items-center pb-2">
//     {/* logo section  */}
//     <div className="pl-2 pt-2">
//       <div className="avatar">
//         <div className="w-10 md:w-16 rounded-full border border-sky-200 shadow hover:shadow-md">
//           <Image
//             src={`https://i.ibb.co/FnfTKzv/icon-Jihad.png`}
//             width={200}
//             height={200}
//           />
//         </div>
//       </div>
//     </div>

//     <div className="flex space-x-3">
//       {/* search section  */}
//       <form action="">
//         <div className="form-control">
//           <label className="input-group input-group-md">
//             <input
//               type="search"
//               placeholder="Search"
//               className=" border-b border-neutral-400 p-2 focus:p-3 focus:outline-none"
//             />
//             <button type="submit" placeholder="search" className=" px-2">
//               <IoMdSearch className="text-2xl"></IoMdSearch>
//             </button>
//           </label>
//         </div>
//       </form>
//       {/* mobile device navbar  */}

//     </div>
//   </div>
//   <nav className="hidden md:flex justify-between items-center ">
//     <ul className="flex space-x-6 py-2">
//       <li className="px-2 py-1 hover:underline">
//         <Link href={`/`}>Start Page</Link>
//       </li>
//       <li className="px-2 py-1 hover:underline">
//         <Link href={`/`}>Blog articles</Link>
//       </li>
//       <li className="px-2 py-1 hover:underline">
//         <Link href={`/`}>About me</Link>
//       </li>
//       <li className="px-2 py-1 hover:underline">
//         <Link href={`/`}>My projects</Link>
//       </li>
//       <li className="px-2 py-1 hover:underline">
//         <Link href={`/`}>Contact me</Link>
//       </li>
//     </ul>
//     <div className="">
//       <Link
//         className="flex items-center space-x-3 hover:underline "
//         href={`/`}
//       >
//         <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>{" "}
//         <span>Buy Products</span>
//       </Link>
//     </div>
//   </nav>
// </div>

export default Navbar;
