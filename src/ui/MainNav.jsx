// import styled from "styled-components";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineCheckCircle, HiOutlineUsers } from "react-icons/hi2";
import { IoNutritionOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import MainNavLists from "./MainNavLists";
import Button from "./Button";

const sidebarBtnsData = [
  {
    title: "overview",
    btns: [{
      name: "dashboard",
      type: "sideBtn",
      to: "/dashboard",
      icon: <HiOutlineViewGrid />
    }, {
      name: "trainer-approval",
      type: "sideBtn",
      to: "/trainer-approval",
      icon: <HiOutlineCheckCircle />
    }],
  },
  {
    title: "user management",
    btns: [{
      name: "system-users",
      type: "sideBtn",
      to: "/system-users",
      icon: <HiOutlineUsers />
    }],
  },
  {
    title: "content management",
    btns: [{
      name: "nutrition",
      type: "sideBtn",
      to: "/nutrition",
      icon: <IoNutritionOutline />
    },
    {
      name: "workout",
      type: "sideBtn",
      to: "/workout",
      icon: <CiDumbbell />
    }
    ],
  },
  {
    title: "financial management",
    btns: [{
      name: "financial",
      type: "sideBtn",
      to: "/transcations",
      icon: <CiWallet />
    }]
  },
  {
    title: "support and help",
    btns: [{
      name: "support",
      type: "sideBtn",
      to: "/support",
      icon: <PiHeadphones />
    }]
  },
]

function MainNav() {
  return (
    <div
      className="capitalize mx-2 my-4 sm:mx-3 flex flex-col
     justify-between text-sm sm:text-base"
    >
      <ul className="flex flex-col gap-1">
        {sidebarBtnsData.map((btnData, index) =>
          <MainNavLists key={index} data={btnData} />)}
      </ul>

      <Button type="logout" name="logout" to={"/login"}>
        <CiLogout className="text-xl" />
      </Button>
    </div>
  );
}

export default MainNav;
