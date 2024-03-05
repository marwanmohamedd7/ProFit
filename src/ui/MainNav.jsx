// import styled from "styled-components";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineCheckCircle, HiOutlineUsers } from "react-icons/hi2";
import { IoGlobeOutline, IoNutritionOutline } from "react-icons/io5";
import { CiDumbbell, CiPercent } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiCurrencyCircleDollar, PiHeadphones, PiUsersThreeLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import MainNavLists from "./MainNavLists";
import Button from "./Button";
import { useGetPageLocation } from "../hooks/useGetPageLocation";

const sidebarBtnsDataAdmin = [
  {
    title: "overview",
    btns: [{
      name: "dashboard",
      type: "sideBtn",
      to: "admin/dashboard",
      icon: <HiOutlineViewGrid />
    }, {
      name: "trainer-approval",
      type: "sideBtn",
      to: "admin/trainer-approval",
      icon: <HiOutlineCheckCircle />
    }],
  },
  {
    title: "user management",
    btns: [{
      name: "system-users",
      type: "sideBtn",
      to: "admin/system-users",
      icon: <HiOutlineUsers />
    }],
  },
  {
    title: "content management",
    btns: [{
      name: "nutrition",
      type: "sideBtn",
      to: "admin/nutrition",
      icon: <IoNutritionOutline />
    },
    {
      name: "workout",
      type: "sideBtn",
      to: "admin/workout",
      icon: <CiDumbbell />
    }
    ],
  },
  {
    title: "financial management",
    btns: [{
      name: "financial",
      type: "sideBtn",
      to: "admin/transcations",
      icon: <CiWallet />
    }]
  },
  {
    title: "support and help",
    btns: [{
      name: "support",
      type: "sideBtn",
      to: "admin/support",
      icon: <PiHeadphones />
    }]
  },
]
const sidebarBtnsDataTrainer = [
  {
    title: "management",
    btns: [
      {
        name: "dashboard",
        type: "sideBtn",
        to: "trainer/dashboard",
        icon: <HiOutlineViewGrid />
      }, {
        name: "my-portfolio",
        type: "sideBtn",
        to: "trainer/portfolio",
        icon: <IoGlobeOutline />
      }, {
        name: "trainees",
        type: "sideBtn",
        to: "trainer/trainees",
        icon: <PiUsersThreeLight />
      }, {
        name: "messages",
        type: "sideBtn",
        to: "trainer/messages",
        icon: <BiMessageSquareDetail />
      }
    ],
  },
  {
    title: "content library",
    btns: [
      {
        name: "nutrition",
        type: "sideBtn",
        to: "trainer/nutrition",
        icon: <IoNutritionOutline />
      },
      {
        name: "workout",
        type: "sideBtn",
        to: "trainer/workout",
        icon: <CiDumbbell />
      }
    ],
  },
  {
    title: "finance",
    btns: [
      {
        name: "packages",
        type: "sideBtn",
        to: "trainer/packages",
        icon: <CiPercent />
      },
      {
        name: "transcations",
        type: "sideBtn",
        to: "trainer/transcations",
        icon: <PiCurrencyCircleDollar />
      }
    ],
  },
]

function MainNav() {
  const { role } = useGetPageLocation()
  return (
    <div
      className="capitalize mx-2 my-4 sm:mx-3 flex flex-col
     justify-between text-sm sm:text-base"
    >
      <ul className="flex flex-col gap-1">


        {
          role === "admin" ?
            <>
              {sidebarBtnsDataAdmin.map((btnData, index) =>
                <MainNavLists key={index} data={btnData} />)}
            </>
            :
            <>
              {sidebarBtnsDataTrainer.map((btnData, index) =>
                <MainNavLists key={index} data={btnData} />)}
            </>
        }

      </ul>

      <Button type="logout" name="logout" to={"/login"}>
        <CiLogout className="text-xl" />
      </Button>
    </div>
  );
}

export default MainNav;
