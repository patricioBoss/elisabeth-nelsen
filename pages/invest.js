import React from "react";
import LandingLayout from "../components/landing-layout/LandingLayout";
import plans from "../helpers/plans";
import { capitalCase } from "change-case";
import { fCurrency } from "../utils/formatNumber";
import numeral from "numeral";
import Link from "next/link";

const Invest = () => {
  return (
    <>
      {/* <!-- Start Hero --> */}
      <section className="relative table w-full py-36 lg:py-44 bg-[url('/img/services.jpg')] bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h5 className="text-white/50 text-lg font-medium">
              Our Comfortable Rates
            </h5>
            <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Pricing / Plans
            </h3>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li
              className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              investment plans
            </li>
          </ul>
        </div>
      </section>
      {/* <!--end section--> */}
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-gray-50">
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

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Choose Pricing Plan
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              We pride ourselves in providing first class services in the
              industry. Our strong expertise at understanding clients’ needs and
              mapping them against a wide range of superior products gives us a
              comprehensive edge in the market share
            </p>
          </div>
          {/* <!--end grid--> */}

          <div className="grid grid-cols-1">
            <div id="StarterContent" className="mt-6">
              <div
                className=""
                id="start-month"
                role="tabpanel"
                aria-labelledby="start-month-tab"
              >
                <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[10px]">
                  {plans.map(({ id, name, interest, maximum, minimum }) => (
                    <div
                      key={id}
                      className="group border-b-[3px] p-6 py-8 hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow rounded-md bg-gray-50 hover:bg-white h-fit"
                    >
                      <h6 className="font-bold uppercase mb-5 text-indigo-600">
                        {capitalCase(name)} Plan
                      </h6>

                      <div className="flex mb-5">
                        <span className="text-xl font-semibold">$</span>
                        <span className="price text-4xl font-semibold mb-0">
                          {numeral(interest).format("0.00")}%
                        </span>
                        <span className="text-base font-semibold self-end mb-1">
                          (5days)
                        </span>
                      </div>

                      <ul className="list-none text-slate-500">
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                          {fCurrency(minimum)}Min. Deposit
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                          {fCurrency(maximum)}Min. Deposit
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                          10% Referral Bonus
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                          You get back your capital
                        </li>
                      </ul>
                      <a
                        href=""
                        className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                      >
                        <span>Get started</span>
                      </a>
                    </div>
                  ))}

                  {/* <div className="group border-b-[3px] p-6 py-8 hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow rounded-md bg-gray-50 hover:bg-white h-fit">
                    <h6 className="font-bold uppercase mb-5 text-indigo-600">
                      Starter
                    </h6>

                    <div className="flex mb-5">
                      <span className="text-xl font-semibold">$</span>
                      <span className="price text-4xl font-semibold mb-0">
                        9
                      </span>
                      <span className="text-xl font-semibold self-end mb-1">
                        /mo
                      </span>
                    </div>

                    <ul className="list-none text-slate-400">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Full Access
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Source Files
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Enhanced Security
                      </li>
                    </ul>
                    <a
                      href=""
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                    >
                      Buy Now
                    </a>
                  </div>

                  <div className="group border-b-[3px] border-indigo-600 p-6 py-8 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow rounded-md bg-white h-fit">
                    <span className="absolute -right-11 -top-[10px] rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">
                      Best
                    </span>
                    <h6 className="font-bold uppercase mb-5 text-indigo-600">
                      Business
                    </h6>

                    <div className="flex mb-5">
                      <span className="text-xl font-semibold">$</span>
                      <span className="price text-4xl font-semibold mb-0">
                        74
                      </span>
                      <span className="text-xl font-semibold self-end mb-1">
                        /mo
                      </span>
                    </div>

                    <ul className="list-none text-slate-400">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Full Access
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Source Files
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Free Appointments
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Enhanced Security
                      </li>
                    </ul>
                    <a
                      href=""
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                    >
                      Try it Now
                    </a>
                  </div>

                  <div className="group border-b-[3px] p-6 py-8 hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow rounded-md bg-gray-50 hover:bg-white h-fit">
                    <h6 className="font-bold uppercase mb-5 text-indigo-600">
                      Professional
                    </h6>

                    <div className="flex mb-5">
                      <span className="text-xl font-semibold">$</span>
                      <span className="price text-4xl font-semibold mb-0">
                        99
                      </span>
                      <span className="text-xl font-semibold self-end mb-1">
                        /mo
                      </span>
                    </div>

                    <ul className="list-none text-slate-400">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Full Access
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Source Files
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Free Appointments
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Enhanced Security
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                        Free Installment
                      </li>
                    </ul>
                    <a
                      href=""
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                    >
                      Started Now
                    </a>
                  </div> */}
                </div>
                {/* <!--end grid--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
Invest.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
export default Invest;
