import React from "react";
import Banner from "./Banner";
import gymPic from "../assets/images/gym.jpg";
import Footer from "./Footer";
function AboutUs() {
  return (
    <div>
      {/* <Banner/> */}
      <h1 className="text-3xl font-bold mb-3 text-center pt-6">
        Be Strong Fitness
      </h1>
      <div className="w-full h-full flex mb-4 py-5">
        <div className="w-1/2 m-4 p-10">
          <img className="h-100 w-100 p-2" src={gymPic} alt="image" />
        </div>
        <div className="w-1/2 m-4">
          <p className="text-lg ">
            OUR VISION:
            <br />
            Currently My health Fitness is one of the largest Fitness camp in
            India .
            <br />
            It is divided into an outdoor training fitness facility, indoor gym,
            strongman area, assault course, and Healths Kitchen. Further more
            Titan has a three story indoor gym with a gear shop plus onsite
            accommodation.
            <br />
            The indoor gym has a protein bar and gear shop located in the
            reception. Our vision is to offer you the customer the highest level
            of training and to make your stay at Titan Fitness Camp an
            experience you will never forget. Most of our costumers who join
            Titan Fitness come to transform their bodies, remove bad habits and
            take a break from their stressful lives.
            <br />
            Fitness training is the best way to unwind and rejuvenate.
            {/* Stepping out of your immediate environment and placing yourself among people who are out to achieve the same goals is the first step. We encourage our clients to train hard, eat healthy and rest because these are three main keys to a successful body transformation. */}
          </p>
        </div>
      </div>
      <div className="p-2">
        We feel very fortunate to be in the country we are in, and as such
        repesct all local laws, culture and people. We are firm believers in
        social responsibility in business. To this end we regularly reach out to
        one of the many Phuket charities to see what we can do to help. Keep an
        eye on our facebook page to see if you can get involved next time.
      </div>
    </div>
  );
}

export default AboutUs;
