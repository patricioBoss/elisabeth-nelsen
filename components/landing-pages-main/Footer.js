import React from "react";

const social = [
  // {
  //   name: "Facebook",
  //   href: "https://www.facebook.com/profile.php?id=100092628723527&mibextid=LQQJ4d",
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Mail",
    href: "mailto:advisor.elizabethjaneross@gmail.com",
    icon: (props) => (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z"></path>
      </svg>
    ),
  },
  // {
  //   name: "Facebook",
  //   href: "https://www.facebook.com/profile.php?id=100082337082795&mibextid=ZbWKwL",
  //   icon: (props) => (
  //     <svg
  //       stroke="currentColor"
  //       fill="currentColor"
  //       strokeWidth="0"
  //       viewBox="0 0 512 512"
  //       xmlns="http://www.w3.org/2000/svg"
  //       {...props}
  //     >
  //       <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
  //     </svg>
  //   ),
  // },
  // {
  //   name: "Instagram",
  //   href: "https://instagram.com/instagram_name?igshid=OGQ5ZDc2ODk2ZA==",
  //   icon: (props) => (
  //     <svg
  //       stroke="currentColor"
  //       fill="currentColor"
  //       strokeWidth="0"
  //       viewBox="0 0 1024 1024"
  //       xmlns="http://www.w3.org/2000/svg"
  //       {...props}
  //     >
  //       <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
  //     </svg>
  //   ),
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/in/carissa-barney/",
  //   icon: (props) => (
  //     <svg
  //       stroke="currentColor"
  //       fill="currentColor"
  //       strokeWidth="0"
  //       viewBox="0 0 16 16"
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
  //     </svg>
  //   ),
  // },
];

const footerLinks = [
  {
    name: "Privacy & Cookies",
    href: "https://docs.google.com/document/d/e/2PACX-1vRAqCJhnytqXdGnoZp8b-Hi-AAdM_r_6_2nAP-6caf5XPK1QiihYOg_ZpX6LbMRs459VO4kUwpO2Ymk/pub",
  },
  {
    name: "Terms of Use",
    href: "https://docs.google.com/document/d/e/2PACX-1vRAqCJhnytqXdGnoZp8b-Hi-AAdM_r_6_2nAP-6caf5XPK1QiihYOg_ZpX6LbMRs459VO4kUwpO2Ymk/pub",
  },
  {
    name: "Contact Us",
    href: "https://wa.me/14322464294",
  },
];
//+14322464294
const Footer = () => {
  return (
    <div className=" bg-[#F2F2F2] py-[45px]">
      <div className=" container">
        <div className=" flex justify-center gap-3 pb-[45px] border-b border-b-[#CCCCCC]">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#666666] hover:text-[#3c3c3c] ml-4"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className=" flex justify-center pt-[47px] gap-6">
          {footerLinks.map(({ name, href }) => (
            <a
              key={name}
              target="_blank"
              href={href}
              rel="noreferrer"
              className=" text-sm text-[#666666] "
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
