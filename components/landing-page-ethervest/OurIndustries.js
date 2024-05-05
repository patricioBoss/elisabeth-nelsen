import Link from "next/link";
import React from "react";
import { BsCoin } from "react-icons/bs";

const OurIndustries = () => {
  return (
    <section className="relative py-16">
      <div className="container mt-16 pt-16">
        <div className="absolute inset-0 opacity-25 bg-[url('/img/map.png')] bg-no-repeat bg-center"></div>

        <div className="relative grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            The Industries We Serve
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Ethervest provides investment services to help clients generate
            income through real estate, stocks, bonds, and cryptocurrencies.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <div className="group px-6 py-8 bg-white shadow hover:shadow-lg duration-500 ease-in-out border-t-[3px] border-gray-100 hover:border-indigo-600">
            <i className="uil uil-building text-3xl text-indigo-600"></i>

            <div className="content mt-6">
              <Link
                href="/real-estate"
                className="text-xl font-semibold hover:text-indigo-600 duration-500 ease-in-out"
              >
                Real Estate
              </Link>
              <p className="text-slate-400 mt-4">
                Our team of experienced real estate professionals can help our
                clients identify and evaluate investment properties that align
                with their investment objectives and risk profile.
              </p>

              <div className="mt-5">
                <Link
                  href="/real-estate"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="group px-6 py-8 bg-white shadow hover:shadow-lg duration-500 ease-in-out border-t-[3px] border-gray-100 hover:border-indigo-600">
            <BsCoin className="text-indigo-600 h-[30px] w-[30px]" />
            <div className="content mt-6">
              <a
                href=""
                className="text-xl font-semibold hover:text-indigo-600 duration-500 ease-in-out"
              >
                Cryptocurrency/NFTs
              </a>
              <p className="text-slate-400 mt-4">
                We can help our clients navigate the complex world of
                cryptocurrency investing, providing insights on market trends
                and potential risks.
              </p>

              <div className="mt-5">
                <a
                  href=""
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="group px-6 py-8 bg-white shadow hover:shadow-lg duration-500 ease-in-out border-t-[3px] border-gray-100 hover:border-indigo-600">
            <i className="uil uil-university text-3xl text-indigo-600"></i>
            <div className="content mt-6">
              <Link
                href="/stocks"
                className="text-xl font-semibold hover:text-indigo-600 duration-500 ease-in-out"
              >
                Stocks/Bonds
              </Link>
              <p className="text-slate-400 mt-4">
                Our team of investment professionals can provide guidance on
                investing in individual stocks, exchange-traded funds (ETFs),
                and mutual funds.
              </p>

              <div className="mt-5">
                <Link
                  href="/stocks"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
