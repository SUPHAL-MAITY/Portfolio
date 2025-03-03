import React from "react";
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="  flex  p-6 justify-center ">

      <div className="bg-slate-200    max-w-2xl shadow overflow-hidden sm:rounded-lg ">

        <div className="px-4 py-5 sm:px-6">
          <p className="mt-1 text-center font-bold max-w-2xl text-sm text-gray-500">
            Contact Me
          </p>
        </div>

        <div className=" border-t border-gray-200">
          <dl>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">
                Full name
              </dt>
              <dd className="mt-1  text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Suphal Maity
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">
                Best techno
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                MERN
              </dd>
            </div>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                suphalmaity730@gmail.com
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 font-bold">
                Mobile
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                9804137946
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center p-2 font-serif">
          <a href="/Suphal_maity_MERN.pdf" download="suphal___maity" >
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
  );
};

export default Contact;
