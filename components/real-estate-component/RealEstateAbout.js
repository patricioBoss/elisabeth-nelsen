import React from "react";

const RealEstateAbout = () => {
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-5">
          <div className="relative">
            <div className="p-5 shadow rounded-t-full bg-gray-50">
              <img
                src="/img/real/about.jpg"
                className="shadow-md rounded-t-full rounded-md"
                alt=""
              />
            </div>
            <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
              <a
                href="#!"
                data-type="youtube"
                data-id="yba7hPeTSjk"
                className="lightbox h-20 w-20 rounded-full shadow-md inline-flex items-center justify-center bg-white text-indigo-600"
              >
                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ml-4">
            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
              Lucrative, Diversified,
              <br /> Manageable.
            </h4>
            <p className="text-slate-400 max-w-xl">
              Real estate investment with Ethervest is a smart way to diversify
              your portfolio and earn lucrative returns. With access to over
              4,000 properties, investors can choose from a wide range of prime
              real estate investments to suit their needs and preferences.
              Ethervest&apos;s platform provides an easy and hassle-free way to
              invest in real estate, without the need for extensive knowledge or
              experience in the field. Their nationwide management network
              allows for full management of your property, making real estate
              investment a truly hands-off experience.
            </p>

            <div className="mt-4">
              <a
                href=""
                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3"
              >
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAbout;
