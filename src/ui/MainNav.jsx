// import styled from "styled-components";
import Button from "./Button";
import toast from "react-hot-toast";
import MainNavLists from "./MainNavLists";
import { useNavigate } from "react-router-dom";
import { useMainNav } from "../context/MainNavProvider";
import { useCurrentUser } from "../context/UserProvider";
import GridIcon from "../Icons/GridIcon";
import AppleIcon from "../Icons/AppleIcon";
import GlobalIcon from "../Icons/GlobalIcon";
import MessageIcon from "../Icons/MessageIcon";
import UsersMoreIcon from "../Icons/UsersMoreIcon";
import DumbbellIcon from "../Icons/DumbbellIcon";
import PackageIcon from "../Icons/PackageIcon";
import CoinIcon from "../Icons/CoinIcon";
import WalletIcon from "../Icons/WalletIcon";
import UsersIcon from "../Icons/UsersIcon";
import PinPaperCheckIcon from "../Icons/PinPaperCheckIcon";
import HeadphonesIcon from "../Icons/HeadphonesIcon";
import LogoutIcon from "../Icons/LogoutIcon";
// import { PiHeadphones } from "react-icons/pi";

const sidebarBtnsDataAdmin = [
  {
    title: "overview",
    btns: [{
      name: "dashboard",
      type: "sideBtn",
      to: "dashboard",
      icon: <GridIcon />
    }, {
      name: "trainer-approval",
      type: "sideBtn",
      to: "trainer-approval",
      icon: <PinPaperCheckIcon />
    }],
  },
  {
    title: "user management",
    btns: [{
      name: "system-users",
      type: "sideBtn",
      to: "system-users",
      icon: <UsersIcon />
    }],
  },
  {
    title: "content management",
    btns: [{
      name: "nutrition",
      type: "sideBtn",
      to: "nutrition",
      icon: <AppleIcon />
    },
    {
      name: "workout",
      type: "sideBtn",
      to: "workout",
      icon: <DumbbellIcon />
    }
    ],
  },
  {
    title: "financial management",
    btns: [{
      name: "financial",
      type: "sideBtn",
      to: "Financial",
      icon: <WalletIcon />
    }]
  },
  {
    title: "support and help",
    btns: [{
      name: "support",
      type: "sideBtn",
      to: "support",
      icon: <HeadphonesIcon />
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
        icon: <GridIcon />,
        // icon: <HiOutlineViewGrid />,
      }, {
        name: "my-portfolio",
        type: "sideBtn",
        to: "portfolio",
        icon: <GlobalIcon />
      }, {
        name: "trainees",
        type: "sideBtn",
        to: "trainees",
        icon: <UsersMoreIcon />
      }, {
        name: "messages",
        type: "sideBtn",
        to: "messages",
        icon: <MessageIcon />
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
        icon: <AppleIcon />
      },
      {
        name: "workout",
        type: "sideBtn",
        to: "workout",
        icon: <DumbbellIcon />
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
        icon: <PackageIcon />
      },
      {
        name: "subscriptions",
        type: "sideBtn",
        to: "subscriptions",
        icon: <CoinIcon />
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
  const { isOpen } = useMainNav();
  return (
    <div
      className="capitalize p-3 flex flex-col
     justify-between text-sm sm:text-base"
    >
      <ul className={`flex flex-col gap-1 ${!isOpen && "divide-y"}`}>
        {
          userRole === "admin" ?
            <>
              {
                sidebarBtnsDataAdmin.map((btnData, index) =>
                  <MainNavLists key={index} data={btnData} />)
              }
            </>
            :
            <>
              {
                sidebarBtnsDataTrainer.map((btnData, index) =>
                  <MainNavLists key={index} data={btnData} />)
              }
            </>
        }
      </ul>

      <Button onClick={handleLogout} type="logout" name={isOpen ? "logout" : ""} to={"/login"}>
        <LogoutIcon className="text-xl" />
      </Button>
    </div>
  );
}

export default MainNav;
