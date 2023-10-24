"use client";

import React, { createElement, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  UsersIcon,
  PuzzlePieceIcon,
  GiftIcon,
  UserPlusIcon,
  HomeIcon,
  PencilSquareIcon,
  ExclamationTriangleIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaUserLock,
  FaCss3,
  FaReact,
} from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";

import { DiMongodb, DiNodejs } from "react-icons/di";
import {
  MdShoppingCartCheckout,
  MdOutlineLogout,
  MdOutlineLogin,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  black: "bg-gray-200 text-gray-900",
};

// const navListMenuItems = [
//   {
//     color: "orange",
//     icon: FaHtml5,
//     title: "Html 5",
//     description: "Learn about html 5 and more difficult thing.",
//   },
//   {
//     color: "blue",
//     icon: FaCss3Alt,
//     title: "Css",
//     description: "New thing about Css3, press releases, and resources",
//   },
//   {
//     color: "blue",
//     icon: FaCss3,
//     title: "Css Framework",
//     description: "New thing about Css Framework, and resources",
//   },

//   {
//     color: "orange",
//     icon: FaJsSquare,
//     title: "JavaScript",
//     description: "All basic to advanced topic are include.",
//   },
//   {
//     color: "green",
//     icon: DiMongodb,
//     title: "Mongodb",
//     description: "Easy way to manage your database by Mongodb",
//   },
//   {
//     color: "teal",
//     icon: DiNodejs,
//     title: "Node Js",
//     description: "Learn about Node.js for in your project.",
//   },
//   {
//     color: "teal",
//     icon: FaNodeJs,
//     title: "Express Js",
//     description: "Learn about Express.js for in your backEnd project.",
//   },
//   {
//     color: "blue",
//     icon: FaReact,
//     title: "React",
//     description: "Learn about React for in your frontEnd project.",
//   },
//   {
//     color: "black",
//     icon: FaNodeJs,
//     title: "Next js",
//     description: "Learn about Next.js for in your seo project.",
//   },
//   {
//     color: "blue",
//     icon: FaNodeJs,
//     title: "Redux",
//     description: "Learn about Redux for in your state management.",
//   },
//   {
//     color: "cyan",
//     icon: PuzzlePieceIcon,
//     title: "UI Kits",
//     description: "High quality UI Kits helps you to 2x faster.",
//   },
//   {
//     color: "pink",
//     icon: GiftIcon,
//     title: "Open Source",
//     description: "List of all our open-source projects, it's all free.",
//   },
//   {
//     color: "green",
//     icon: UsersIcon,
//     title: (
//       <div className="flex items-center gap-1">
//         Careers{" "}
//         <Chip
//           size="sm"
//           color="green"
//           variant="ghost"
//           value="We're hiring!"
//           className="capitalize"
//         />
//       </div>
//     ),
//     description: "We are always looking for talented people. Join us my team!",
//   },
// ];

const navListMenuItems = [
  {
    color: "orange",
    icon: FaHtml5,
    title: "Html 5",
    description: "Learn about html 5 and more difficult thing.",
  },
  {
    color: "blue",
    icon: FaCss3Alt,
    title: "Css",
    description: "New thing about Css3, press releases, and resources",
  },
  {
    color: "blue",
    icon: FaCss3,
    title: "Css Framework",
    description: "New thing about Css Framework, and resources",
  },

  {
    color: "orange",
    icon: FaJsSquare,
    title: "JavaScript",
    description: "All basic to advanced topic are include.",
  },
  {
    color: "green",
    icon: DiMongodb,
    title: "Mongodb",
    description: "Easy way to manage your database by Mongodb",
  },
  {
    color: "teal",
    icon: DiNodejs,
    title: "Node Js",
    description: "Learn about Node.js for in your project.",
  },
  {
    color: "teal",
    icon: FaNodeJs,
    title: "Express Js",
    description: "Learn about Express.js for in your backEnd project.",
  },
  {
    color: "blue",
    icon: FaReact,
    title: "React",
    description: "Learn about React for in your frontEnd project.",
  },
];
function AccoutListMenu({ handleLogout, user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <FaUserLock className="h-[18px] w-[18px]" />
              Account
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 space-y-2">
            {user ? (
              <>
                <ListItem className="flex flex-col items-center">
                  <img
                    className="w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <h4>{user?.displayName}</h4>
                </ListItem>
                <ListItem onClick={handleLogout}>
                  <Link href={`#`} className="flex space-x-2 mb-2">
                    <MdOutlineLogout className="text-xl"></MdOutlineLogout>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm"
                    >
                      Log Out
                    </Typography>
                  </Link>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem>
                  <Link href={`login`} className="flex space-x-2 mb-2">
                    <MdOutlineLogin className="text-xl"></MdOutlineLogin>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm"
                    >
                      Log In
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={`register`} className="flex space-x-2 mb-2">
                    <AiOutlineUserAdd className="text-xl"></AiOutlineUserAdd>
                    {/* <img className="w-10" src="https://i.ibb.co/LrshMpN/icons8-create.gif" alt="" /> */}
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm"
                    >
                      Create account
                    </Typography>
                  </Link>
                </ListItem>
              </>
            )}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {user ? (
            <>
              <ListItem className="flex flex-col items-center">
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <h4>{user?.displayName}</h4>
              </ListItem>
              <ListItem onClick={handleLogout}>
                <Link href={`#`} className="flex space-x-2 mb-2">
                  <MdOutlineLogout className="text-xl"></MdOutlineLogout>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm"
                  >
                    Log Out
                  </Typography>
                </Link>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <Link href={`login`} className="flex space-x-2 mb-2">
                  <MdOutlineLogin className="text-xl"></MdOutlineLogin>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm"
                  >
                    Log In
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={`register`} className="flex space-x-2 mb-2">
                  <AiOutlineUserAdd className="text-xl"></AiOutlineUserAdd>
                  {/* <img className="w-10" src="https://i.ibb.co/LrshMpN/icons8-create.gif" alt="" /> */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm"
                  >
                    Create account
                  </Typography>
                </Link>
              </ListItem>
            </>
          )}
        </Collapse>
      </div>
    </>
  );
}
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <Link href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <PencilSquareIcon className="h-[18px] w-[18px]" />
              Blog article
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList({ handleLogout, user }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/" className="text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <HomeIcon className="h-[18px] w-[18px]" />
          Start page
        </ListItem>
      </Link>

      <NavListMenu />

      <Link href="/" className="text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <ComputerDesktopIcon className="h-[18px] w-[18px]" />
          My projects
        </ListItem>
      </Link>
      <Link className="text-sm" href="/">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <UserPlusIcon className="h-[18px] w-[18px]" />
          Contact me
        </ListItem>
      </Link>

      <AccoutListMenu handleLogout={handleLogout} user={user} />
    </List>
  );
}

export function NavbarWithMegaMenu({ handleLogout, user }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" shadow-0 rounded-sm  mx-auto max-w-screen-xl px-4 py-2 ">
      <div className="flex items-center  justify-between text-blue-gray-700">
        {/* <div className="font-semibold text-blue-gray-600 mr-4 cursor-pointer py-1.5 lg:ml-2">
          Jihad Blogs
        </div> */}
        <div className="hidden lg:block">
          <NavList handleLogout={handleLogout} user={user} />
        </div>
        <div className="">
          <ListItem className="flex text-sm items-center gap-2 py-2 ">
            <PiShoppingCartThin className="text-2xl" />
            Buy Products
          </ListItem>
        </div>
        <div className="lg:hidden flex items-center space-x-3">
          <h4 className="lg:hidden  flex">
            <Input
              name="search"
              className=""
              label="Search"
              variant="outlined"
              type="search"
            />
          </h4>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList handleLogout={handleLogout} user={user} />
        <div className="lg:hidden">
          <Link
            href="/"
            className="flex space-x-2 text-black items-center mb-4"
          >
            <MdShoppingCartCheckout className="text-xl"></MdShoppingCartCheckout>
            <span>Buy product</span>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}
