// import styled from "styled-components";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineCheckCircle, HiOutlineUsers } from "react-icons/hi2";
import { IoGlobeOutline, IoNutritionOutline } from "react-icons/io5";
import { CiDumbbell, CiPercent } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiCurrencyCircleDollar, PiHeadphones, PiUsersThreeLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import MainNavLists from "./MainNavLists";
import Button from "./Button";
import { useCurrentUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const sidebarBtnsDataAdmin = [
  {
    title: "overview",
    btns: [{
      name: "dashboard",
      type: "sideBtn",
      to: "dashboard",
      icon: <HiOutlineViewGrid />
    }, {
      name: "trainer-approval",
      type: "sideBtn",
      to: "trainer-approval",
      icon: <HiOutlineCheckCircle />
    }],
  },
  {
    title: "user management",
    btns: [{
      name: "system-users",
      type: "sideBtn",
      to: "system-users",
      icon: <HiOutlineUsers />
    }],
  },
  {
    title: "content management",
    btns: [{
      name: "nutrition",
      type: "sideBtn",
      to: "nutrition",
      icon: <IoNutritionOutline />
    },
    {
      name: "workout",
      type: "sideBtn",
      to: "workout",
      icon: <CiDumbbell />
    }
    ],
  },
  {
    title: "financial management",
    btns: [{
      name: "financial",
      type: "sideBtn",
      to: "Financial",
      icon: <CiWallet />
    }]
  },
  {
    title: "support and help",
    btns: [{
      name: "support",
      type: "sideBtn",
      to: "support",
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
        to: "dashboard",
        icon: <HiOutlineViewGrid />
      }, {
        name: "my-portfolio",
        type: "sideBtn",
        to: "portfolio",
        icon: <IoGlobeOutline />
      }, {
        name: "trainees",
        type: "sideBtn",
        to: "trainees",
        icon: <PiUsersThreeLight />
      }, {
        name: "messages",
        type: "sideBtn",
        to: "messages",
        icon: <BiMessageRoundedDetail />
      }
    ],
  },
  {
    title: "content library",
    btns: [
      {
        name: "nutrition",
        type: "sideBtn",
        to: "nutrition",
        icon: <IoNutritionOutline />
      },
      {
        name: "workout",
        type: "sideBtn",
        to: "workout",
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
        to: "packages",
        icon: <CiPercent />
      },
      {
        name: "transcations",
        type: "sideBtn",
        to: "transcations",
        icon: <PiCurrencyCircleDollar />
      }
    ],
  },
]

function MainNav() {
  const navigate = useNavigate()
  const { setUserId, setUserToken, setUserRole, userRole } = useCurrentUser();
  function handleLogout() {
    setUserId(null)
    setUserRole(null);
    setUserToken(null);
    localStorage.removeItem("userToken");
    navigate("/login", { replace: true });
    toast.success("You have been logged out successfully!")
  }
  return (
    <div
      className="capitalize mx-2 my-4 sm:mx-3 flex flex-col
     justify-between text-sm sm:text-base"
    >
      <ul className="flex flex-col gap-1">
        {
          userRole === "admin" ?
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

      <Button onClick={handleLogout} type="logout" name="logout" to={"/login"}>
        <CiLogout className="text-xl" />
      </Button>
    </div>
  );
}

export default MainNav;
