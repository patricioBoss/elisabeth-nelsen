import Link from "next/link";
import React from "react";

const estateList = [
  {
    name: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
    size: 8000,
    bed: 4,
    bath: 3,
    price: 5000,
    rating: 4,
    people: 24,
  },
  {
    name: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
    size: 8000,
    bed: 4,
    bath: 3,
    price: 5000,
    rating: 4,
    people: 24,
  },
  {
    name: "3723 SANDBAR DR, Addis, LA 70710, USA",
    size: 8000,
    bed: 4,
    bath: 3,
    price: 5000,
    rating: 4,
    people: 24,
  },
  {
    name: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
    size: 8000,
    bed: 4,
    bath: 3,
    price: 5000,
    rating: 4,
    people: 24,
  },
  {
    name: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
    size: 8000,
    bed: 4,
    bath: 3,
    price: 5000,
    rating: 4,
    people: 24,
  },
];

const RealEstateList = () => {
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Featured Properties
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Ethervest aims to provide investors with a curated selection of real
          estate assets that have been carefully vetted for their potential for
          growth and profitability.
        </p>
      </div>
      {/* <!--end grid--> */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        {estateList.map(
          ({ name, bed, bath, price, people, size, rating }, index) => (
            <div
              key={index}
              className="group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500"
            >
              <div className="relative">
                <img src={`/img/real/property/${index + 1}.jpg`} alt="" />
              </div>

              <div className="p-6">
                <div className="pb-6">
                  <Link
                    href="/invest"
                    className="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500"
                  >
                    {name}
                  </Link>
                </div>

                <ul className="py-6 border-y border-gray-100 flex items-center list-none">
                  <li className="flex items-center mr-4">
                    <i className="uil uil-compress-arrows text-2xl mr-2 text-indigo-600"></i>
                    <span>{size}sqf</span>
                  </li>

                  <li className="flex items-center mr-4">
                    <i className="uil uil-bed-double text-2xl mr-2 text-indigo-600"></i>
                    <span>{bed} Beds</span>
                  </li>

                  <li className="flex items-center">
                    <i className="uil uil-bath text-2xl mr-2 text-indigo-600"></i>
                    <span>{bath} Baths</span>
                  </li>
                </ul>

                <ul className="pt-6 flex justify-between items-center list-none">
                  <li>
                    <span className="text-slate-400">Price</span>
                    <p className="text-lg font-medium">${price}</p>
                  </li>

                  <li>
                    <span className="text-slate-400">Rating</span>
                    <ul className="text-lg font-medium list-none">
                      {[...Array(5)].map((_, index) => (
                        <li
                          key={index}
                          className={`inline ${
                            rating > index ? "text-amber-400" : "text-gray-300"
                          }`}
                        >
                          <i className="mdi mdi-star"></i>
                        </li>
                      ))}

                      <li className="inline text-black">5.0({people})</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )
        )}
        {/* <!--end property content--> */}
      </div>
      {/* <!--en grid--> */}
    </div>
  );
};

export default RealEstateList;
