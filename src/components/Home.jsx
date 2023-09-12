import React from "react";
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import GymInfo from "./GymInfo.jsx";
import Events from "./Events.jsx";
import Footer from "./Footer.jsx";
import Trainers from "./Trainers.jsx";

export default function Home() {
  return (
    <div className="w-screen">
      <Banner />
      <Events />
      <Trainers />
      <GymInfo />
    </div>
  );
}
