import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isScroll, setIsScroll] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <Popover className={`navbar ${isScroll ? "is-sticky" : ""}`} id="navbar">
      {/* <div className="container flex flex-wrap items-center justify-end">
  <a className="navbar-brand" href="index.html">
    <span className="inline-block">
      <img src="assets/images/logo-dark.png" className="l-dark" alt="" />
      <img
        src="assets/images/logo-light.png"
        className="l-light"
        alt=""
      />
    </span>
    <img src="assets/images/logo-light.png" className="hidden" alt="" />
  </a>
  <div className="nav-icons flex items-center lg_992:order-2 ml-auto">
    <button
      data-collapse="menu-collapse"
      type="button"
      className="collapse-btn inline-flex items-center ml-3 lg_992:hidden"
      aria-controls="menu-collapse"
      aria-expanded="false"
    >
      <span className="sr-only">Navigation Menu</span>
      <i className="mdi mdi-menu mdi-24px"></i>
    </button>
  </div>
  <div
    className="navigation lg_992:order-1 lg_992:flex hidden"
    id="menu-collapse"
  >
    <ul className="navbar-nav nav-light" id="navbar-navlist">
      <li className="nav-item">
        <a className="nav-link active" href="#home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">
          About us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#features">
          Services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testi">
          Review
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#pricing">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#team">
          Team
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#blog">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">
          Contact us
        </a>
      </li>
    </ul>
  </div>
</div> */}

      <div className="flex items-center justify-between px-4 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group inline-flex items-center rounded-md text-base font-medium text-white/60 hover:text-white focus:outline-none"
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <solution.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {solution.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {solution.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Docs
          </a>
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Sign up
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
