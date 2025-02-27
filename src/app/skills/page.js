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
import JEST from "../../../public/jest.png"
import CPP from "../../../public/cpp.png"
import next from "../../../public/nextjs.png"
import ws from  "../../../public/ws.png"
import ts from  "../../../public/ts.png"

const page = () => {
  return (
    <>
      <div className=" flex flex-col items-center   bg-black  min-h-screen  sm:grid sm:grid-cols-6 gap-4 p-10">

        <div class=" mx-4 w-1/2 sm:w-auto mt-4   overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={js}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>




        <div class="w-1/2 sm:w-auto   mx-4  mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={react}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto  mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={next}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={node}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class=" w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={mongoDB}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={python}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>

        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={CPP}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>

        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={html}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
      
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={css}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={tailwind}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
     
      
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={github}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={JEST}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={ws}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="w-1/2 sm:w-auto mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={ts}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
      
      

       
      </div>
    </>
  );
};

export default page;
