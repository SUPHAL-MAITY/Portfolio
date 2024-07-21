"use client";

import React, { createContext } from "react";
import Image from "next/image";
import js from "../../../public/js.png"
import react from "../../../public/react.jpg"
import mongoDB from "../../../public/mongoDB.png"
import node from "../../../public/node.png"
import css from "../../../public/css.jpg"
import tailwind from "../../../public/tailwind.jpg"
import python from "../../../public/python.jpg"
import html from "../../../public/html.jpg"
import github from "../../../public/github.jpg"
import JEST from "../../../public/jest.jpg"
import CPP from "../../../public/cpp.jpg"
import next from "../../../public/next.jpg"

const page = () => {
  return (
    <>
      <div className="bg-slate-200  min-h-screen p-10 grid grid-cols-6">

        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={js}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>




        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={react}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={mongoDB}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={node}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={css}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={tailwind}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={python}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={html}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={github}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={JEST}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={CPP}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40 ">
          <Image
            src={next}
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
