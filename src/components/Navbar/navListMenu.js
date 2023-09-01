import React from "react";
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
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    UserCircleIcon,
    CubeTransparentIcon,
    Bars3Icon,
    XMarkIcon,
    FlagIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    Square3Stack3DIcon,
    RocketLaunchIcon,
    FaceSmileIcon,
    PuzzlePieceIcon,
    GiftIcon,
    UserPlusIcon,
    HomeIcon,
    PencilSquareIcon,
    ExclamationTriangleIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare, FaDatabase } from 'react-icons/fa'

import Link from "next/link";

const colors = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-500",
    "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
    purple: "bg-purple-50 text-purple-500",
    teal: "bg-teal-50 text-teal-500",
    cyan: "bg-cyan-50 text-cyan-500",
    pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
    {
        color: "blue",
        icon: FaHtml5,
        title: "Html 5",
        description: "Learn about html 5 and more difficult thing.",
    },
    {
        color: "orange",
        icon: FaCss3Alt,
        title: "Css",
        description: "New thing about Css3, press releases, and resources",
    },
    {
        color: "green",
        icon: UsersIcon,
        title: (
            <div className="flex items-center gap-1">
                Careers{" "}
                <Chip
                    size="sm"
                    color="green"
                    variant="ghost"
                    value="We're hiring!"
                    className="capitalize"
                />
            </div>
        ),
        description: "We are always looking for talented people. Join us!",
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "Legal",
        description: "All the stuff that we dan from legal made us add.",
    },
    {
        color: "purple",
        icon: RocketLaunchIcon,
        title: "Products",
        description: "Checkout our products that helps a startup running.",
    },
    {
        color: "teal",
        icon: FaceSmileIcon,
        title: "Icons",
        description: "Set of beautiful icons that you can use in your project.",
    },
    {
        color: "cyan",
        icon: PuzzlePieceIcon,
        title: "UI Kits",
        description: "High quality UI Kits helps you to 2x faster.",
    },
    {
        color: "pink",
        icon: GiftIcon,
        title: "Open Source",
        description: "List of all our open-source projects, it's all free.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ icon, title, description, color }, key) => (
            <Link href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`rounded-lg p-5 ${colors[color]}`}>
                        {React.createElement(icon, {
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
        <React.Fragment>
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
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
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
                    <ExclamationTriangleIcon className="h-[18px] w-[18px]" />
                    Aboute me
                </ListItem>

            </Link>
            <Link href="/" className="text-sm">
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <ComputerDesktopIcon className="h-[18px] w-[18px]" />
                    My projects
                </ListItem>

            </Link>
            <Link className="text-sm" href='/'>
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <UserPlusIcon className="h-[18px] w-[18px]" />
                    Contact me
                </ListItem>
            </Link>
        </List>
    );
}

export function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    Jihad Blogs
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        Sign In
                    </Button>
                    <Button variant="gradient" size="sm">
                        Sign Up
                    </Button>
                </div>
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
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Sign In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign Up
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}