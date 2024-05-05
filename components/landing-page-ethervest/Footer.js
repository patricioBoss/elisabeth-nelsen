import Link from "next/link";
import React from "react";
import LanguageTranslate from "../LanguageTranslate";

const Footer = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <a href="#" className=" focus:outline-none">
                    <img
                      src="/logo/Logo-full-white.svg"
                      className=" w-36"
                      alt=""
                    />
                  </a>
                  <p className="mt-2 mb-3 text-gray-300">
                    At Ethervest, we are dedicated to helping our clients
                    achieve their financial goals through personalized
                    investment solutions and exceptional service.
                  </p>
                  {/* <LanguageTranslate /> */}
                  <ul className="list-none mt-6">
                    {/* <li className="inline"><a href="https://1.envato.market/techwind" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                                <li className="inline"><a href="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                                <li className="inline"><a href="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-behance" title="Behance"></i></a></li>
                                <li className="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-linkedin" title="Linkedin"></i></a></li>
                                <li className="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                <li className="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                <li className="inline"><a href="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                <li className="inline"><a href="mailto:support@shreethemes.in" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                                <li className="inline"><a href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i className="uil uil-file align-middle" title="customization"></i></a></li> */}
                  </ul>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Company
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <Link
                        href="/#about"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> About us
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="page-services.html"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Real
                        Estate
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/cryptocurrency"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i>{" "}
                        Cryptocurrency
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="/stocks"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i>{" "}
                        Stocks/Bonds
                      </Link>
                    </li>

                    <li className="mt-[10px]">
                      <Link
                        href="/login"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Login
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Usefull Links
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href="https://docs.google.com/document/d/e/2PACX-1vTaa_CQ0-eZR5aff9nFr4dFwGR9q9PtSx5n_rlDlboFgJGJfDP1Nn3BA7lDBJmZoHPc43B19JJn5W6t/pub"
                        target={"_blank"}
                        rel="noreferrer"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Terms of
                        Services
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="https://docs.google.com/document/d/e/2PACX-1vTaa_CQ0-eZR5aff9nFr4dFwGR9q9PtSx5n_rlDlboFgJGJfDP1Nn3BA7lDBJmZoHPc43B19JJn5W6t/pub"
                        target={"_blank"}
                        rel="noreferrer"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Privacy
                        Policy
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="tel:+447404791963"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Contact
                        Us
                        <br />
                        (+447404791963)
                      </a>
                    </li>
                    {/* <li className="mt-[10px]">
                      <a
                        href="changelog.html"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Changelog
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="widget.html"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Widget
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Newsletter
                  </h5>
                  <p className="mt-6">
                    Sign up and receive the latest tips via email.
                  </p>
                  <form>
                    <div className="grid grid-cols-1">
                      <div className="foot-subscribe my-3">
                        <label className="form-label">
                          Write your email{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="mail"
                            className="w-4 h-4 absolute top-3 left-4"
                          ></i>
                          <input
                            type="email"
                            className="form-input bg-gray-800 border border-gray-800 text-gray-100 pl-12 focus:shadow-none"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-left text-center">
              <p className="mb-0">
                All right reserved © {new Date().getFullYear()} Ethervest
                Technologies .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
