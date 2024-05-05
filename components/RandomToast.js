import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { GiTakeMyMoney } from "react-icons/gi";
import { fCurrency } from "../utils/formatNumber";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const customToast = (name, state, amount) => (t) =>
  (
    <div
      className={`bg-[#3182c1] text-white flex rounded-[10px] w-3/5 sm:w-[300px] pt-[5px] md:pt-[10px] pb-[9px] md:pb-[16px] pr-[10px] md:pr-[32px] ${
        t.visible ? " animate-slide-in-bottom" : " animate-fade-out-bottom"
      }`}
    >
      <div className=" h-full grid place-content-center w-[50px] sm:w-[70px]">
        <GiTakeMyMoney className=" w-[40px] h-[40px] " />
      </div>
      <div className="flex-1">
        <h3 className=" text-sm sm:text-xl font-inter font-bold">
          Earnings update
        </h3>
        <p className=" text-sm leading-normal">
          {name} from {state} just earned
          <span className=" font-semibold">{fCurrency(amount)}</span>
        </p>
      </div>
    </div>
  );

const RandomToast = () => {
  const first = useRef(true);
  const [currentRandom, setCurrentRandom] = useState(2);
  console.log({ currentRandom });
  useEffect(() => {
    let currentTimeout;
    console.log("useEffect is running");

    currentTimeout = setTimeout(() => {
      console.log("timeOut Run");

      axios({
        baseURL: "https://random-data-api.com/",
        method: "GET",
        url: "/api/v2/users",
      })
        .then((response) => {
          const fakeUser = response.data;
          const amount = randomIntFromInterval(400, 1500);
          const {
            first_name,
            address: { state },
          } = fakeUser;
          toast.custom(customToast(first_name, state, amount));
        })
        .catch((error) => {
          console.error({ error });
        })
        .finally(() => {
          setCurrentRandom((x) => {
            let myRandom = randomIntFromInterval(10, 20);
            if (x === myRandom) {
              myRandom = randomIntFromInterval(10, 25);
            }
            return myRandom;
          });
        });

      first.current = true;
    }, 1000 * currentRandom);
    first.current = false;
    return () => clearTimeout(currentTimeout);
  }, [currentRandom]);

  return (
    <>
      <Toaster
        containerStyle={{
          top: 20,
          left: 20,
          bottom: "30%",
          right: 20,
        }}
        position="bottom-left"
      />
    </>
  );
};

export default RandomToast;
