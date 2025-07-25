"use client";
import React from "react";
import Image from "next/image";
import web1 from  "../../../public/web1.jpg"
import web2 from  "../../../public/web2.jpg"
import model from  "../../../public/3d.jpg"

const Services = () => {
  return (
    <div className="p-4 flex flex-wrap  font-serif   bg-[#251c31] justify-center  ">
     

      <div className="w-[344px] flex justify-center bg-white rounded-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] mx-2 my-4">
        <div className="  relative  text-white z-10  flex flex-col   bg-[#38126D] shadow-lg bg-clip-border rounded-xl w-[340px]  ">
          <div className="relative h-56 mx-4 mt-6 flex justify-center items-center text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src={web1}
              alt="card-image"
              width={340}
              height={300}
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Frontend Development
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
              I specialize in building clean, responsive, and user-friendly frontend interfaces using modern technologies like React, Tailwind CSS, and JavaScript. Whether you need a sleek landing page or a dynamic web app, I can turn your ideas or designs into fast, scalable, and interactive UIs
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
               Backend Development
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
               I build secure, scalable, and efficient backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL. From building RESTful APIs to implementing real-time features with WebSockets, I ensure your application runs smoothly behind the scenes.
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
              src={web2}
              alt="card-image"
              width={340}
              height={300}
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              
              Devops
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
              I help streamline your development workflow by implementing efficient DevOps practices, including CI/CD pipelines, automated testing, and containerization. Using tools like Docker, GitHub Actions, and AWS, I ensure your applications are scalable, secure, and production-ready. 
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
              src={model}
              alt="card-image"
              width={340}
              height={300}
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="p-6">
            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              3d Modelling
            </h5>
            <p className="block   text-base antialiased font-light leading-relaxed text-inherit">
              I create high-quality 3D models for games, animations, product visualization, and educational content. Whether it’s stylized or realistic, I bring ideas to life with precision and creativity using Blender. From modeling to texturing and rendering, I ensure every detail aligns with your vision.
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
