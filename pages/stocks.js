import React from "react";
import LandingLayout from "../components/landing-layout/LandingLayout";
import FeatureSection from "../components/landing-page-components/FeatureSection";
import Link from "next/link";

export default function Stocks() {
  return (
    <>
      <section className="relative table w-full py-36 lg:py-44 bg-[url('/img/fx_photo.png')] bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-12">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Stocks/ETFs
            </h3>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li
              className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              stocks
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-gray-50">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <FeatureSection />
    </>
  );
}

Stocks.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
