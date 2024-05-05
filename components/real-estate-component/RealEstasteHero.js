import React from "react";

const RealEstasteHero = () => {
  return (
    <section className="relative mt-20">
      <div className="container-fluid md:mx-4 mx-2">
        <div className="relative pt-48 pb-60 table w-full rounded-2xl shadow-md overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="image-wrap absolute -top-[350px] -bottom-[350px] -left-[100px] -right-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto"
              id="real"
            ></div>
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="md:text-left text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                  Unlock the Potential
                  <br /> of Real Estate Investment.
                </h1>
                <p className="text-white/70 text-xl max-w-xl">
                  Invest in Prime Properties for High Returns Today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstasteHero;
