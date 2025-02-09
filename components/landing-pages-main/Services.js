import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import VideoPlayer from "../VideoPlayer";
const TickerTape = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const tapeSymbol = [
  {
    title: "TESLA, INC.",
    proName: "NASDAQ:TSLA",
  },
  {
    title: "APPLE INC.",
    proName: "NASDAQ:AAPL",
  },
  {
    title: "AMAZON.COM, INC.",
    proName: "NASDAQ:AMZN",
  },
  {
    title: " MICROSOFT CORPORATION",
    proName: "NASDAQ:MSFT",
  },
  {
    title: "NETFLIX, INC.",
    proName: "NASDAQ:NFLX",
  },
  {
    title: " META PLATFORMS, INC.",
    proName: "NASDAQ:META",
  },
  {
    title: "GOOGLE INC.",
    proName: "NASDAQ:GOOGL",
  },
  {
    title: "ALIBABA",
    proName: "NYSE:BABA",
  },
  {
    title: " SHOPIFY INC.",
    proName: "NYSE:SHOP",
  },
  {
    title: "UBER",
    proName: "NYSE:UBER",
  },
];
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicHJlY2lvdXNuYXp6eSIsImEiOiJja2M4aWdrbGIwMnd2MnlsazJlZm54NXRuIn0.A0xjQik1x92Insshsa2mkA",
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "My Story and Services" },
  { name: "Client Service Team" },
  { name: "Location" },
];
const services = [
  "Wealth Management",
  "Retirement Planning",
  "Business Planning",
  "401(k) Rollovers",
  "Trust Services",
  "Sustainable Investing",
  "529 Plans",
  "Corporate Retirement Plans",
];

const MyStory = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="w-full">
      <div className=" md:flex mt-8">
        <div className=" md:w-3/5 pl-3 pr-4">
          <h4 className=" text-2xl font-bold mb-[14px] mt-5">
            My Story and Services
          </h4>
          <VideoPlayer />
          {/* <div className="relative pt-[56.25%]">
            <iframe
              allowfullscreen
              className="absolute top-0 left-0 h-full border-none w-full "
              allow="encrypted-media"
              src="https://players.brightcove.net/644391012001/OsECwOFeq_default/index.html?videoId=6040280424001"
            ></iframe>
          </div> */}

          <p className=" text-base mt-[14px]">
            My goal is to thoroughly understand your financial needs and then
            align the resources to help you meet or exceed them. I can help you
            evaluate near-term concerns and plan for long-term goals, be a
            sounding board for investment ideas, assist you in developing and
            executing a strategy that is precisely your own and helps you meet
            your needs.
            <br />
            {more && <br />}
            {more && (
              <span>
                <span className=" font-semibold">Elizabeth Jane Ross:</span>
                &quot;As a seasoned business professional with expertise in
                business development, performance management, and book
                management, I leverage my skills to drive growth and retention
                at E*TRADE from Morgan Stanley. With a strong educational
                background and recent certifications (SIE, Series 7, and Series
                63), I am passionate about my work and eager to connect with
                other managers and collaborators to explore new
                opportunities.&quot;
              </span>
            )}
            <br />
            <span
              className=" text-[#0F8EC7] hover:underline transition-all duration-500 flex gap-3 cursor-pointer"
              onClick={() => setMore((x) => !x)}
            >
              {!more ? "About me ) read more" : "show less"}
              {!more ? (
                <ChevronDownIcon className=" w-4" />
              ) : (
                <ChevronUpIcon className=" w-4" />
              )}
            </span>
          </p>
        </div>
        <div className=" md:w-2/5 pl-4 pr-3">
          <h4 className=" text-2xl font-bold mb-[14px]">Services Include</h4>
          <ul className="list-disc mt-4 pl-8">
            {services.map((service) => (
              <li key={service} className=" text-base mb-[6px]">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-3">
        <p className=" text-[#757575] my-[62px]">
          Securities Agent: DC, WI, WA, VT, VA, UT, TX, TN, SC, RI, OH, NY, NJ,
          NC, MI, MD, MA, LA, KY, KS, GA, FL, CO, CA, AZ, OR; General Securities
          Representative; Investment Advisor Representative NMLS#: 841426
        </p>
        <div className=" border-t border-t-[#CCCCCC]">
          <p className=" text-sm my-[32px]">
            Check the background of Our Firm and Investment Professionals on{" "}
            <span>
              <a
                href="https://brokercheck.finra.org/"
                className=" text-[#0F8EC7] cursor-pointer text-base font-bold underline"
              >
                FINRA&apos;s BrokerCheck
              </a>
              *
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
const serviceTeam = (
  <div className="p-[1.875rem]">
    <h4 className=" text-2xl font-bold my-[1.875rem] mt-5">
      My Story and Services
    </h4>
    <h6 className=" font-bold text-lg my-[0.875rem]">
      Vince Pravata - Registered Client Service Associate
    </h6>
    <div>
      <p className=" text-base">
        <span className=" font-semibold">Phone:</span> +1(432)246-4294
      </p>
      <p className=" text-base">
        <span className=" font-semibold">Email:</span>
        advisor.elizabethjaneross@gmail.com
      </p>
    </div>
  </div>
);

const MyLocation = (
  <div className="p-[1.875rem]">
    <div className=" mt-10 md:flex md:pr-10">
      <div className=" md:flex-1">
        <h4 className=" text-2xl font-bold mb-[14px] mt-5">LOCATION</h4>
        <p className=" text-base ">
          Harborside 2 200 Hudson Street,
          <br />
          Suite 501, Jersey City, NJ 07311
          <br />
          Direct: +1(432)246-4294
        </p>
      </div>
      <div className=" md:flex-1">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "400px",
            width: "100%",
          }}
          center={[-92.4061892, 34.7730047]}
        >
          <Marker coordinates={[-92.4061892, 34.7730047]}>
            <div
              style={{
                width: "30px",
                height: "30px",
                background: "red",
                borderRadius: "50%",
              }}
            />
          </Marker>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[-92.4061892, 34.7730047]} />
          </Layer>
        </Map>
        {/* https://www.google.com/maps/place/Folger+Nolan+Fleming+Douglas/@38.899508,-77.0358319,17z/data=!3m2!4b1!5s0x89b7b79619aecd81:0x2a59f5593968e4ee!4m6!3m5!1s0x89b7b7bd8aa530c1:0xd8665b50ba2dba62!8m2!3d38.899508!4d-77.033257!16s%2Fg%2F1tfk9xnr?hl=en&entry=ttu */}
        {/* AIzaSyD4iE2xVSpkLLOXoyqT-RuPwURN3ddScAI */}
        {/* <iframe
          src="https://www.google.com/maps/embed/v1/place
          ?key=AIzaSyD4iE2xVSpkLLOXoyqT-RuPwURN3ddScAI
          &q=Folger+Nolan+Fleming+Douglas"
          style={{ border: 0 }}
          className="w-full  md:h-[400px] h-[500px]"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  </div>
);

const Services = () => {
  const [selected, setSelected] = useState(tabs[0].name);
  return (
    <div className="container -translate-y-[100px] flex py-6 gap-7 h-fit">
      <div id="portfolio-details" className=" bg-white w-full p-4">
        <div className="border-b border-gray-200 max-w-[465.81px]">
          <div className="-mb-px flex overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                href={tab.href}
                onClick={() => setSelected(tab.name)}
                className={classNames(
                  selected === tab.name
                    ? "border-[#0F8EC7] "
                    : "border-transparent hover:border-[#0F8EC7]",
                  "whitespace-nowrap text-[#002B51] py-3 px-[15px] border-b-4 text-base"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {selected === tabs[0].name && <MyStory />}
        {selected === tabs[1].name && serviceTeam}
        {selected === tabs[2].name && MyLocation}
      </div>
    </div>
  );
};

export default Services;

export const PortfolioCTA = () => {
  return (
    <div className=" mt-10 w-full">
      <TickerTape></TickerTape>
      <div className=" bg-[#0F8EC7] py-[75px]">
        <div className=" max-w-768 text-center text-white mx-auto">
          <h5 className=" text-2xl mt-3">Wealth Management</h5>
          <h5 className=" text-2xl  mt-3">Global Investment Office</h5>
          <h6 className=" my-[90px] font-inter text-[30px]">
            Portfolio Insights
          </h6>
          <a
            href="#faqs"
            className=" py-[16px] px-[52px] rounded-full text-[19px] border-2 border-[rgba(255,255,255,0.5)] font-bold hover:bg-white hover:text-[#0F8EC7]"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
