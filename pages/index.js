// ----------------------------------------------------------------------

import dynamic from "next/dynamic";
import Hero from "../components/landing-pages-main/Hero";
import Testimonials from "../components/landing-pages-main/Testimonials.js";
import LandingLayout from "../components/landing-layout/LandingLayout.js";
import Script from "next/script.js";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import axios from "axios";
import AboutSection from "../components/landing-pages-main/AboutSection";
import Services, {
  PortfolioCTA,
} from "../components/landing-pages-main/Services";
import BlogList1 from "../components/landing-pages-main/BlogList1";
import { getNeededInfo } from "../utils/settings";
import MorganBlogs from "../components/landing-pages-main/MorganBlogs";
import CTAsection from "../components/landing-pages-main/CTAsection";
import FAQs from "../components/landing-pages-main/FAQs.js";
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

export default function Index({ list }) {
  const mounted = useRef(true);
  const router = useRouter();
  useEffect(() => {
    const { ref } = router.query;

    if (mounted.current) {
      if (ref) {
        axios
          .get("/api/user/" + ref)
          .then((res) => {
            console.log(res.data.data);
            localStorage.setItem("ref", JSON.stringify(res.data.data));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
    mounted.current = false;
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <PortfolioCTA />
      <BlogList1 list={list} />
      <MorganBlogs />
      <CTAsection />
      <FAQs />
      <Testimonials />
      {router.pathname === "/" && (
        <Script>
          {`
            easy_background("#home",
                {
                    slide: ["/img/bg/1.jpg", "/img/bg/2.jpg", "/img/bg/3.jpg"],
                    delay: [4000, 4000, 4000]
                }
            );
            `}
        </Script>
      )}
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

//https://bd-piano-live.mystagingwebsite.com/wp-json/wp/v2/posts?include=535495,535506,535510
export const getStaticProps = async () => {
  try {
    const { data } = await axios({
      baseURL: "https://archive.businessday.ng",
      method: "GET",
      url: "/wp-json/wp/v2/posts",
      params: {
        include: "290943,290481",
      },
    });

    const myArticules = await Promise.all(
      data.map((articule) => getNeededInfo(articule))
    );
    console.log({ myArticules });
    return {
      props: {
        list: myArticules,
      },
      revalidate: 5 * 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
