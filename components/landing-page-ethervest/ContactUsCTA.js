import { PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ContactUsCTA = () => {
  return (
    <div className="container md:my-24 my-16">
      <div className="grid grid-cols-1 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
          Contact us
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Have Question ? Get in touch!
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          contact us now or visit our{" "}
          <Link href={"/faq"} className=" underline">
            FAQ page
          </Link>{" "}
          to learn more
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="btn bg-indigo-600 flex gap-2 items-center w-fit hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
          >
            <PhoneIcon className="h-5 w-5" /> Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCTA;
