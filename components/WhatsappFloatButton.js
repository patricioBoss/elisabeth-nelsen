import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// .App {
//     font-family: sans-serif;
//     text-align: center;
//   }

//   .float {
//     position: fixed;
//     width: 60px;
//     height: 60px;
//     bottom: 100px;
//     right: 40px;
//     background-color: #25d366;
//     color: #fff !important;
//     border-radius: 50px;
//     text-align: center;
//     font-size: 30px;
//     box-shadow: 2px 2px 3px #999;
//     z-index: 100;
//   }

//   .my-float {
//     margin-top: 16px;
//   }

export default function WhatsappFloatButton({ cellphoneNumber }) {
  return (
    <div>
      <a
        style={{ color: "white" }}
        // href="https://api.whatsapp.com/send/?phone=14322464294&"
        href="https://api.whatsapp.com/send/?phone=14322464294&text=Hello,%20i%20am%20interested%20in%20the%20services%20provided%20by%20Elizabeth%20Jane%20Ross%20and%20would%20like%20to%20know%20more."
        className="fixed w-[70px] h-[70px] bottom-[22px] left-[40px] bg-green-500 text-white rounded-full text-center text-[40px] shadow-md z-10 flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="" />
      </a>
    </div>
  );
}
