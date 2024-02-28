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

function MainNav() {
  return (
    <div
      className="capitalize mx-2 my-4 sm:mx-3 flex flex-col
     justify-between text-sm sm:text-base"
    >
      <ul className="flex flex-col gap-1">
        <MainNavLists title="overview">
          <Button type="mainBtn" page="dashboard" to={"/dashboard"}>
            <HiOutlineViewGrid className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
          <Button type="mainBtn" page="trainer-approval" to={"/trainer-approval"}>
            <HiOutlineCheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </MainNavLists>

        <MainNavLists title="user management">
          <Button type="mainBtn" page="system-users" to={"/system-users"}>
            <HiOutlineUsers className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </MainNavLists>

        <MainNavLists title="content management">
          <Button type="mainBtn" page="nutrition" to={"/nutrition"}>
            <IoNutritionOutline className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
          <Button type="mainBtn" page="workout" to={"/workout"}>
            <CiDumbbell className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </MainNavLists>

        <MainNavLists title="financial management">
          <Button type="mainBtn" page="financial" to={"/transcations"}>
            <CiWallet className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </MainNavLists>

        <MainNavLists title="support and help">
          <Button type="mainBtn" page="support" to={"/support"}>
            <PiHeadphones className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </MainNavLists>
      </ul>

      <Button type="logout" page="logout" to={"/login"}>
        <CiLogout className="w-4 sm:w-5 h-4 sm:h-5" />
      </Button>
    </div>
  );
}

export default MainNav;
