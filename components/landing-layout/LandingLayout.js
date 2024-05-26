import React from "react";
import Footer from "../landing-pages-main/Footer";
import Navbar from "../landing-pages-main/Navbar";
// import TawkMessenger from "../TawkMessenger";
// import WhatsAppWidget from "../WhatsAppWidget";
import RandomToast from "../RandomToast";
import WhatsappFloatButton from "../WhatsappFloatButton";

const LandingLayout = ({ children, isSticky }) => {
  return (
    <div className=" relative bg-[#F2F2F2]">
      <Navbar />
      {children}
      {/* <TawkMessenger /> */}
      <RandomToast />
      {/* <WhatsAppWidget /> */}
      <WhatsappFloatButton />
      <Footer />
    </div>
  );
};

export default LandingLayout;
