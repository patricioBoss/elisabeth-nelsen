import Image from "next/image";
import React from "react";
import { getNeededInfo } from "../../utils/settings";
import axios from "axios";
import LandingLayout from "../../components/landing-layout/LandingLayout";
import { NextSeo } from "next-seo";
import config from "../../config/config";
const social = [
  {
    name: "Facebook",
    href: (title, url) =>
      `https://www.facebook.com/share.php?u=${url}&title=${title}`,
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: (title, url) => `https://twitter.com/share?url=${url}`,
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: (title, url) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,

    icon: (props) => (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
      </svg>
    ),
  },
  {
    name: "Mail",
    href: (title, url) =>
      `email:?subject=${title}&body=Checkout the update on ${url}`,
    icon: (props) => (
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_98_41)">
          <path
            d="M20.9624 1.30199L10.9624 8.802L0.962402 1.30199C0.962402 0.601987 1.54239 0.0419922 2.20239 0.0419922H19.7024C20.4024 0.0419922 20.9624 0.601987 20.9624 1.30199ZM0.962402 13.802V3.54199L10.9624 11.042L20.9624 3.54199V13.802C20.9624 14.462 20.4024 15.042 19.7024 15.042H2.20239C1.54239 15.042 0.962402 14.462 0.962402 13.802Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_98_41">
            <rect
              width="20"
              height="15"
              fill="white"
              transform="translate(0.962402 0.0419922)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export const getServerSideProps = async (ctx) => {
  // const request = ctx.req;
  // const host = ctx.req.headers.host;
  // const url = ctx.req.url;

  try {
    const { data } = await axios({
      baseURL: "https://archive.businessday.ng",
      method: "GET",
      url: "/wp-json/wp/v2/posts",
      params: {
        slug: ctx.params?.slug,
      },
    });
    const article = await getNeededInfo(data[0]);
    console.log({ data });
    return {
      props: {
        article,
        url: `https://${config.domain}/` + "articles/" + article.slug,
      },
    };
  } catch (err) {
    console.log({ err });
    return {
      notFound: true,
    };
  }
};

const BlogPage = ({ article, url }) => {
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.excerpt}
        canonical={url}
        openGraph={{
          title: article.title,
          description: article.excerpt,
          url: `https://advisor.elizabethreginanelsen.com/articles/${article.slug}`,
          type: "article",
          article: {
            publishedTime: "2017-06-21T23:04:13Z",
            modifiedTime: "2018-01-21T18:04:43Z",
            tags: ["cryptocurrency", "stocks", "investment"],
          },
          images: [article.image],
        }}
      />
      <div className="bg-white">
        <div className=" container">
          <div className="px-4 md:px-8 lg:px-16">
            <div className=" relative w-full h-[261.81px]">
              <Image
                src={article.image}
                quality={100}
                className=" object-cover object-center"
                fill
              />
            </div>
            <div className=" flex justify-center">
              <div className=" lg:mx-28 md:mx-12 w-full pt-[33px] sm:px-[40px] -translate-y-14 bg-white">
                <h5 className=" text-xs text-[#187ABA] mb-[7px] font-semibold">
                  {"Wealth Management".toUpperCase()}
                </h5>
                <h1 className=" font-inter text-[35px] font-bold leading-[44px] text-[#333333] pr-[25%]">
                  {article.title}
                </h1>
                <small className=" font-medium">Apr 20, 2023</small>
                <p className=" text-[#666666] mt-[13px] mb-[19px] text-base">
                  Your retirement has the potential to be the most fulfilling
                  period of your life–but you need to have a plan for your time
                  as well as your finances.
                </p>
                <div className=" flex">
                  <div className="pr-3 py-2 border-r border-r-[#A7A4A4]">
                    <img
                      src="https://www.morganstanley.com/etc.clientlibs/msdotcomr4/clientlibs/clientlib-site/resources/icons/black/ms-icon-share.svg"
                      className=" w-[21px] h-[15px]"
                    />
                  </div>
                  {social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href(
                        encodeURIComponent(article.title),
                        encodeURIComponent(url)
                      )}
                      target="_new"
                      className="text-[#187ABA] ml-4"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <div
                className=" lg:mx-28 md:mx-12 w-full pt-[33px] mt-72 bg-white mb-36"
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default BlogPage;
