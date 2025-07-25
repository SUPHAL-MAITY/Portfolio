import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="  flex   justify-center bg-[#251c31] h-[100vh]">
      <div className="w-[344px] h-[380px]   drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]  ">
        <div className="bg-slate-300  h-[380px]   w-[340px] shadow-lg rounded-lg ">
          <div className="px-4 py-5 sm:px-6">
            <p className=" text-center font-bold max-w-2xl text-lg text-blue-500">
              Contact Me
            </p>
          </div>

          <div className=" border-t border-gray-200">
            <dl>
              <div className="bg-gray-100 px-4 py-5 flex gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold ">
                  Full name
                </dt>
                <dd className="  text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Suphal Maity
                </dd>
              </div>
              <div className="bg-white px-4 py-5 flex gap-4  sm:px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  Best techno
                </dt>
                <dd className=" text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  MERN
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 flex gap-4  sm:px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  Email address
                </dt>
                <dd className="  text-sm text-gray-900 ">
                  suphalmaity730@gmail.com
                </dd>
              </div>
              <div className="bg-white px-4 py-5 flex gap-2  sm:px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  Mobile
                </dt>
                <dd className=" text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  9804137946
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-center items-center p-2 font-serif">
            <a href="/SUPHAL_MAITY_MERN.pdf" download="SUPHAL_MAITY_MERN">
              <button
                type="button"
                className="max-w-2xl  inline-block rounded-2xl bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-2xl transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
