"use client";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="p-4 flex flex-wrap  font-serif   bg-[#251c31] justify-center  ">
     

      <div className="w-[344px] flex justify-center bg-white rounded-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] mx-2 my-4">
        <div className="  relative  text-white z-10  flex flex-col   bg-[#38126D] shadow-lg bg-clip-border rounded-xl w-[340px]  ">
          <div className="relative h-56 mx-4 mt-6 flex justify-center items-center text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              width={340}
              height={300}
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Web Development
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
              Transform your online presence with expert web development
              services. Specializing in modern, responsive designs using MERN
              stack and Tailwind CSS. Let us create a powerful, user-friendly
              website for your business.
            </p>
          </div>
          <div className="p-6 pt-0  flex justify-center">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* https://ddbconsultants.ca/wp-content/uploads/2021/12/how-to-automate-your-business-1536x1024.jpg */}

      <div className="w-[344px] flex justify-center bg-white rounded-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]  mx-2 my-4">
        <div className="  relative  text-white z-10  flex flex-col   bg-[#38126D] shadow-lg bg-clip-border rounded-xl w-[340px]  ">
          <div className="relative h-56 mx-4 mt-6 flex justify-center items-center text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              width={340}
              height={300}
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
               UI/UX
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
              Transform your online presence with expert web development
              services. Specializing in modern, responsive designs using MERN
              stack and Tailwind CSS. Let us create a powerful, user-friendly
              website for your business.
            </p>
          </div>
          <div className="p-6 pt-0  flex justify-center">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="w-[344px] flex justify-center bg-white rounded-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] mx-2 my-4">
        <div className="  relative  text-white z-10  flex flex-col   bg-[#38126D] shadow-lg bg-clip-border rounded-xl w-[340px]  ">
          <div className="relative h-56 mx-4 mt-6 flex justify-center items-center text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              width={340}
              height={300}
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              
              3D modelling
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
              Transform your online presence with expert web development
              services. Specializing in modern, responsive designs using MERN
              stack and Tailwind CSS. Let us create a powerful, user-friendly
              website for your business.
            </p>
          </div>
          <div className="p-6 pt-0  flex justify-center">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
