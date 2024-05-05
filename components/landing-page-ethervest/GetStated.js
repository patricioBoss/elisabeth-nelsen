import Link from "next/link";
import React from "react";

const GetStated = () => {
  return (
    <section
      className="py-24 w-full table relative"
      style={{ background: "url('/img/bg/cta.png') center" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">
            Ready to start your investment journey?
          </h3>

          <p className="text-white opacity-50 max-w-xl mx-auto">
            Let Ethervest help you achieve your financial goals through
            personalized investment solutions.
          </p>

          <div className="relative mt-10">
            <Link
              href="/register"
              className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
            >
              Get Started !
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStated;
