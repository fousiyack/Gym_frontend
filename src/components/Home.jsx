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
      <div className="bg-cover bg-no-repeat bg-left-top py-16 min-h-[367.896px]">
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4 text-red-500 ">PROGRAMS</h1>
  </div>
  <div className="mx-auto w-[170px] border-t-2 border-solid border-red-500 mb-8"></div>
  <div className="text-center p-6">
    <p className="mb-4">
      Our <em>programs</em> are individually tailored fitness programs that are designed after the client’s needs. They include unlimited training, meal plan, diet consultation, accommodation, body scan, and training singlet.
    </p>
    <p className="mb-4">
      Unlimited training means you have unlimited access to all the different classes we offer plus access to the indoor gym.
    </p>
    <p className="mb-4">
      Titan Fitness has a range of fitness programs to suit all your needs. Whether for weight loss or a completely lean body, our programs will combine both dietary and physical needs to get the job done.
    </p>
    <p className="mb-4">
      Contact us for a quote
    </p>
  </div>
</div>

      <Events />
      <Trainers />
      <GymInfo />
    </div>
  );
}
