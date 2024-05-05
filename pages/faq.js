import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";
import LandingLayout from "../components/landing-layout/LandingLayout";
import { Accordion, Default } from "../helpers/Accordion";

let AllData = {
  general: [
    {
      title: "About Ethervest",
      content:
        "Ethervest is a versatile investment platform that provides access to over 4,000 real estate/property investments, as well as global and local investment opportunities in stocks and cryptocurrencies. With favorable exchange rates, Ethervest makes investing in the UK clear and simple, while their nationwide management network offers full property management services.",
    },
    {
      title: "Our Platform",
      content:
        " The platform allows users to invest in over 3,500 stocks listed on the U.S. stock market or their local exchanges in real-time, while also offering a range of cryptocurrency investment options. Ethervest makes funding easy and straightforward, allowing users to start investing with just a few clicks.",
    },
    {
      title: "How to Register on Ethervest",
      content: `
    How to sign up on Ethervest
Sure, here's a simple step-by-step guide on how to sign up on Ethervest:
<br>
1. Open your preferred web browser and navigate to the stock investment web app's website.<br>
2. Look for the "Sign Up" or "Register" button and click on it to start the registration process.<br>
3. Fill in your personal information, including your name, email address, and phone number.<br>
4. Choose a strong password and confirm it.<br>
5. Complete any additional verification steps required by the app, such as Id or phone number verification phone number verification.<br>
6. Provide your financial information, such as your various withdrawal wallet details, fund your account and start investing.<br>
7. Once your account is set up, you can start exploring the app's features, such as browsing available investments and plans, making investment etc.<br>
    `,
    },
  ],
  invest: [
    {
      title: "Can I own multiple Investment asset on Ethervest?",
      content: `Additionally, owning multiple investment assets on Ethervest can help diversify your investment portfolio. Diversification is a key investment strategy that helps reduce risk by spreading your investments across different asset classes. By owning multiple investment assets on Ethervest, you can minimize the impact of market fluctuations on your portfolio and potentially increase your returns over time.`,
    },
    {
      title: "Our Investment Cycle",
      content: `Once approved, an investment lasts for 5 days, with daily interest added according to our listed plans <a class="underline"> here </a>. `,
    },
    {
      title: "Our Affiliate Programs",
      content: `We provide an affiliate program as well as bonuses on investments made by people you referred to our platform.`,
    },
  ],
  support: [
    {
      title: "Reach out to Us",
      content: `You can chat with our 24/7 support center using our embedded chatbot `,
    },
    {
      title: "Call Us",
      content: `Want to talk to our support personnel view details below `,
    },
  ],
};

const faq = () => {
  useEffect(() => {
    document.querySelectorAll("[data-accordion]").forEach((accordionEl) => {
      const alwaysOpen = accordionEl.getAttribute("data-accordion");
      const activeClasses = accordionEl.getAttribute("data-active-classes");
      const inactiveClasses = accordionEl.getAttribute("data-inactive-classes");

      const items = [];
      accordionEl.querySelectorAll("[data-accordion-target]").forEach((el) => {
        const item = {
          id: el.getAttribute("data-accordion-target"),
          triggerEl: el,
          targetEl: document.querySelector(
            el.getAttribute("data-accordion-target")
          ),
          iconEl: el.querySelector("[data-accordion-icon]"),
          active: el.getAttribute("aria-expanded") === "true" ? true : false,
        };
        items.push(item);
      });

      new Accordion(items, {
        alwaysOpen: alwaysOpen === "open" ? true : false,
        activeClasses: activeClasses ? activeClasses : Default.activeClasses,
        inactiveClasses: inactiveClasses
          ? inactiveClasses
          : Default.inactiveClasses,
      });
    });

    return () => {};
  }, []);

  return (
    <>
      <section className="relative table w-full py-36 bg-[url('/img/helpcenter.jpg')] bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Frequently Asked Questions
            </h3>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li
              className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              FAQs
            </li>
          </ul>
        </div>
      </section>
      {/* <!--end section--> */}
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* <!-- End Hero --> */}

      {/* <!-- Start Section--> */}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-md shadow p-6 sticky top-20">
                <ul
                  className="list-none sidebar-nav mb-0 py-0"
                  id="navmenu-nav"
                >
                  <li className="navbar-item mt-3 p-0">
                    <a
                      href="#general"
                      className="text-base font-medium navbar-link"
                    >
                      General Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                      href="#payment"
                      className="text-base font-medium navbar-link"
                    >
                      Investment Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                      href="#support"
                      className="text-base font-medium navbar-link"
                    >
                      Support Questions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-7">
              <div id="general" className="mt-8">
                <h5 className="text-2xl font-semibold">General Questions</h5>

                <div
                  id="accordion-collapsetwo"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {AllData.general.map(({ title, content }, index) => (
                    <div
                      key={`${index + 1}`}
                      className="relative shadow rounded-md overflow-hidden"
                    >
                      <h2
                        className="text-base font-semibold"
                        id={"accordion-collapse-heading-" + index + 1}
                      >
                        <button
                          type="button"
                          className="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target={
                            "#accordion-collapse-body-" + index + 1
                          }
                          aria-expanded={!index ? "true" : "false"}
                          aria-controls={"accordion-collapse-body-" + index + 1}
                        >
                          <span>{title}</span>
                          <svg
                            data-accordion-icon
                            className="w-4 h-4 rotate-180 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id={"accordion-collapse-body-" + index + 1}
                        className="hidden"
                        aria-labelledby={
                          "accordion-collapse-heading-" + index + 1
                        }
                      >
                        <div className="p-5">
                          <p
                            className="text-slate-400"
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="payment" className="mt-8">
                <h5 className="text-2xl font-semibold">Investment Questions</h5>

                <div
                  id="accordion-collapsethree"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {AllData.invest.map(({ title, content }, index) => (
                    <div
                      key={`${index + 2}`}
                      className="relative shadow rounded-md overflow-hidden"
                    >
                      <h2
                        className="text-base font-semibold"
                        id={"accordion-collapse-heading-" + index + 4}
                      >
                        <button
                          type="button"
                          className="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target={
                            "#accordion-collapse-body-" + index + 4
                          }
                          aria-expanded={!index ? "true" : "false"}
                          aria-controls={"accordion-collapse-body-" + index + 4}
                        >
                          <span>{title}</span>
                          <svg
                            data-accordion-icon
                            className="w-4 h-4 rotate-180 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id={"accordion-collapse-body-" + index + 4}
                        className="hidden"
                        aria-labelledby={
                          "accordion-collapse-heading-" + index + 4
                        }
                      >
                        <div className="p-5">
                          <p
                            className="text-slate-400"
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="support" className="mt-8">
                <h5 className="text-2xl font-semibold">Support Questions</h5>

                <div
                  id="accordion-collapsefour"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {AllData.support.map(({ title, content }, index) => (
                    <div
                      key={`${index + 3}`}
                      className="relative shadow rounded-md overflow-hidden"
                    >
                      <h2
                        className="text-base font-semibold"
                        id={"accordion-collapse-heading-" + index + 7}
                      >
                        <button
                          type="button"
                          className="flex justify-between items-center p-5 w-full font-medium text-left"
                          data-accordion-target={
                            "#accordion-collapse-body-" + index + 7
                          }
                          aria-expanded={!index ? "true" : "false"}
                          aria-controls={"accordion-collapse-body-" + index + 7}
                        >
                          <span>{title}</span>
                          <svg
                            data-accordion-icon
                            className="w-4 h-4 rotate-180 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <div
                        id={"accordion-collapse-body-" + index + 7}
                        className="hidden"
                        aria-labelledby={
                          "accordion-collapse-heading-" + index + 7
                        }
                      >
                        <div className="p-5">
                          <p
                            className="text-slate-400"
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
      </section>
    </>
  );
};

faq.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default faq;
