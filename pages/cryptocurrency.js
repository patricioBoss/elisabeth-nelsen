import React, { useEffect, useRef } from "react";
import LandingLayout from "../components/landing-layout/LandingLayout";

const settings = {
  container: ".tiny-home-slide-four",
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: [
    '<i class="mdi mdi-chevron-left "></i>',
    '<i class="mdi mdi-chevron-right"></i>',
  ],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    1025: {
      items: 4,
    },

    992: {
      items: 3,
    },

    767: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};

const Crypto = () => {
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted.current) {
      require("tiny-slider/src/tiny-slider").tns(settings);
    }
    isMounted.current = false;
  }, []);
  return (
    <>
      <section className="relative table w-full py-52 md:py-64 bg-[url('/img/crypto/bg1.jpg')] bg-center bg-no-repeat">
        <div className="container">
          <div className="grid grid-cols-1">
            <h4 className="text-white font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
              Building the future <br /> of Crypto Revolution.
            </h4>
            <p className="text-white/70 max-w-xl mb-0">
              At Ethervest, we understand the complexities of cryptocurrency
              investing and have developed a streamlined approach to help
              investors navigate the market.
            </p>

            <div className="subcribe-form mt-6 mb-4"></div>

            <span className="text-white">
              Looking for help?{" "}
              <a href="" className="text-amber-500">
                Get in touch with us
              </a>
            </span>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="p-6 border-t border-dashed border-white/30">
                <div className="grid grid-cols-12 items-center">
                  <div className="lg:col-span-4 md:col-span-6 col-span-5">
                    <h5 className="text-white/50 text-xl mb-0">
                      Token Popular
                    </h5>
                  </div>

                  <div className="lg:col-span-8 md:col-span-6 col-span-7 relative overflow-hidden">
                    <div className="tiny-home-slide-four flex ">
                      <div className="tiny-slide">
                        <div className="text-center">
                          <h6 className="text-white mb-1">Bitcoin</h6>
                          <span className="text-white/50 block">$ 41245</span>
                          <span className="text-red-600">- 3.5%</span>
                        </div>
                      </div>
                      <div className="tiny-slide">
                        <div className="text-center">
                          <h6 className="text-white mb-1">Litecoin</h6>
                          <span className="text-white/50 block">$ 216</span>
                          <span className="text-emerald-600">+ 3.5%</span>
                        </div>
                      </div>
                      <div className="tiny-slide">
                        <div className="text-center">
                          <h6 className="text-white mb-1">Ethereum</h6>
                          <span className="text-white/50 block">$ 451</span>
                          <span className="text-emerald-600">+ 3.5%</span>
                        </div>
                      </div>
                      <div className="tiny-slide">
                        <div className="text-center">
                          <h6 className="text-white mb-1">Blocknet</h6>
                          <span className="text-white/50 block">$ 845</span>
                          <span className="text-emerald-600">+ 3.5%</span>
                        </div>
                      </div>
                      <div className="tiny-slide">
                        <div className="text-center">
                          <h6 className="text-white mb-1">Monero</h6>
                          <span className="text-white/50 block">$ 654</span>
                          <span className="text-red-600">- 3.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Crypto.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
export default Crypto;
