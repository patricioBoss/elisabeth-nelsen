import Link from "next/link";
import React from "react";

const LandingAbout = () => {
  return (
    <section className="relative md:py-24 py-16 bg-zinc-50" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src="/img/about.jpg"
                className="rounded-lg shadow-lg relative"
                alt=""
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:ml-7">
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                Who We Are ?
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium ">
                Our Company Story
              </h3>

              <p className="text-slate-400 max-w-2xl mx-auto">
                Welcome to Ethervest, where we empower investors to achieve
                financial success through expert guidance in real estate,
                stocks, and crypto. Our team of experienced professionals is
                dedicated to helping you unlock your investment potential and
                make informed decisions that lead to maximum returns. At
                Ethervest, we believe that smart investing is the key to
                building a secure and prosperous future. That&apos;s why we
                offer a range of investment solutions designed to meet the
                unique needs of each client, from first-time investors to
                seasoned professionals. Whether you&apos;re interested in real
                estate, stocks, or crypto, we have the knowledge and expertise
                to guide you every step of the way. We understand that the world
                of investing can be complex and overwhelming, which is why we
                strive to provide personalized, one-on-one support to ensure
                that you feel confident and informed throughout the process. At
                Ethervest, we&apos;re committed to transparency, integrity, and
                putting our clients&apos; interests first. Our goal is to help
                you achieve your investment goals and secure your financial
                future.
              </p>

              <div className="relative mt-10">
                <Link
                  href="/faq"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                >
                  learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
