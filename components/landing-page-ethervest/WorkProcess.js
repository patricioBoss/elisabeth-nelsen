import React from "react";

const WorkProcess = () => {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
          Work Process
        </h6>
        <h3 className="mb-4 md:text-2xl text-xl font-medium">
          Digital System For Our Business
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Here are three work processes that Ethervest might use in its
          investment services.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-8">
        <div className="timeline relative">
          <div className="timeline-item">
            <div className="grid sm:grid-cols-2">
              <div className="">
                <div className="duration date-label-left float-right md:mr-7 relative">
                  <img
                    src="/svg/design-thinking.svg"
                    className="h-64 w-64"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="event event-description-right float-left text-left md:ml-7">
                  <h5 className="text-lg mb-1 font-medium">
                    {" "}
                    Investment Strategy Development
                  </h5>
                  <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                    Ethervest can help its clients develop a personalized
                    investment strategy tailored to their unique financial goals
                    and risk tolerance. This process begins with an in-depth
                    consultation to understand the client&apos;s financial
                    situation, investment objectives, and risk profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mt-5 pt-4">
            <div className="grid sm:grid-cols-2">
              <div className="md:order-1 order-2">
                <div className="event event-description-left float-left text-right md:mr-7">
                  <h5 className="text-lg mb-1 font-medium">
                    Investment Portfolio Management
                  </h5>
                  <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                    Ethervest can help its clients develop a personalized
                    investment strategy tailored to their unique financial goals
                    and risk tolerance. This process begins with an in-depth
                    consultation to understand the client&apos;s financial
                    situation, investment objectives, and risk profile.
                  </p>
                </div>
              </div>
              <div className="md:order-2 order-1">
                <div className="duration duration-right md:ml-7 relative">
                  <img src="/svg/coding.svg" className="h-64 w-64" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mt-5 pt-4">
            <div className="grid sm:grid-cols-2">
              <div className="mt-4 mt-sm-0">
                <div className="duration date-label-left float-right md:mr-7 relative">
                  <img
                    src="/svg/office-desk.svg"
                    className="h-64 w-64"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-4 mt-sm-0">
                <div className="event event-description-right float-left text-left md:ml-7">
                  <h5 className="text-lg mb-1 font-medium">
                    Investment Education and Training
                  </h5>
                  <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                    Ethervest can provide its clients with education and
                    training resources to help them become more informed
                    investors. This includes seminars, workshops, and webinars
                    on a variety of investment-related topics, including Real
                    Estate, stocks, and cryptocurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
