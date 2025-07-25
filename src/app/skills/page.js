"use client";

import React, { createContext } from "react";
import Image from "next/image";
import js from "../../../public/js.png"
import react from "../../../public/react.png"
import mongoDB from "../../../public/mongoDB.png"
import node from "../../../public/node.png"
import css from "../../../public/css.png"
import tailwind from "../../../public/tail.png"
import python from "../../../public/py.png"
import html from "../../../public/html.png"
import github from "../../../public/git.png"

import CPP from "../../../public/cpp.png"
import next from "../../../public/nextjs.png"
import ws from  "../../../public/ws.png"
import ts from  "../../../public/ts.png"

import docker from  "../../../public/docker.png"
import kuber from  "../../../public/kuber.png"
import aws from  "../../../public/aws.png"
import postg from  "../../../public/postg.png"
import blender  from  "../../../public/blender.png"


// bg-linear-to-r from-[#130428] from-7% via-[#251043] via-34% to-[#38126D] to-57% 
// bg-[#251c31]
const page = () => {
  return (
    <>
      <div className="relative bg-[#251c31]  flex flex-col items-center fixed   sm:grid sm:grid-cols-3  md:grid-cols-5  lg:grid-cols-6  2xl:grid-cols-8  gap-4 p-10">
        
        <div className="absolute left-0 top-0  z-0  w-[100vw]  md:w-[40vw] h-full">
          <img src="./Gradient1.png" alt="" />
        </div>

        <div class=" mx-4 w-1/2 sm:w-auto mt-4 z-10  overflow-hidden text-gray-700  bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={js}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>




        <div class="w-1/2 sm:w-auto z-10  mx-4  mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={react}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={next}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={node}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class=" w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={mongoDB}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>

            <div class=" w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={postg}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>


        <div class="w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={python}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>

        <div class="w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={CPP}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>

        <div class="w-1/2 sm:w-auto mx-4 z-10 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={html}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
      
        <div class="w-1/2 sm:w-auto mx-4 z-10 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={css}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 z-10  mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={tailwind}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
     
      
        <div class="w-1/2 sm:w-auto mx-4 z-10 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={github}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>

    

        <div class="w-1/2 sm:w-auto mx-4 z-10 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={ws}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 z-10 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={ts}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>


            <div class=" w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={docker}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>


            <div class=" w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={kuber}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>


            <div class=" w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={aws}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>


            <div class=" w-1/2 sm:w-auto z-10 mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={blender}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
      
        <div className="absolute  right-0  top-0 z-0   w-[100vw]  md:w-[40vw] h-full">
          <img src="./Gradient1.png" alt="" />
        </div>

       
      </div>
    </>
  );
};

export default page;
