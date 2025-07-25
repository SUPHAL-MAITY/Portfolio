"use client";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import project1 from "../../public/ecom_watch.png";
import project2 from "../../public/Food_app.png";
import project3 from "../../public/blog_app.png";
import project4 from "../../public/Landing_page.png";
import project5 from "../../public/gym_ui.png";

const MyCarousel = () => {
  return (
    <Carousel>
      {/* ecom app */}

      <div className="flex flex-col md:flex-row    justify-center items-center">
        <div className=" flex flex-col items-center justify-center  mx-4">
          <h1 className="pt-4 font-bold font-serif text-5xl  md:text-9xl ">
            01
          </h1>

          <div className="">
            <h3 className="font-serif p-2 text-5xl text-yellow-400">
              E-Com App
            </h3>
            <h3 className="text-2xl pt-2 font-mono   hover:underline">
              <Link
                href="https://github.com/SUPHAL-MAITY/ecom_frontend"
                target="_blank"
              >
                <span className=" ">GitHub </span>{" "}
              </Link>
            </h3>

            <h3 className="text-2xl pt-2 font-mono   hover:underline">
              <Link
                href="https://ecom-frontend-tawny.vercel.app/"
                target="_blank"
              >
                <span className=" "> Website link </span>{" "}
              </Link>
            </h3>
          </div>
        </div>

        <div className="mx-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] ">
          <Image
            className=" h-[300px]  w-[300px]  rounded-lg mb-4"
            src={project1}
            style={{ padding: "10px", borderRadius: "5%" }}
            alt="Image 1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row    justify-center items-center">
        <div className=" flex flex-col items-center justify-center  mx-4">
          <h1 className="pt-4 font-bold font-serif text-5xl  md:text-9xl ">
            02
          </h1>

          <div className="">
            <h3 className="font-serif p-2 text-5xl text-yellow-400">
              Food App
            </h3>

            <h3 className="text-2xl pt-2 font-mono   hover:underline">
              <Link
                href="https://github.com/SUPHAL-MAITY/Food-App"
                target="_blank"
              >
                <span className=" ">GitHub </span>{" "}
              </Link>
            </h3>

            <h3 className="text-2xl pt-2 font-mono   hover:underline">
              <Link
                href="https://food-app-frontend-puce.vercel.app/"
                target="_blank"
              >
                <span className=" "> Website link </span>{" "}
              </Link>
            </h3>
          </div>
        </div>

        <div className="mx-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] ">
          <Image
            className=" h-[300px]  w-[300px]  rounded-lg mb-4"
            src={project2}
            style={{ padding: "10px", borderRadius: "5%" }}
            alt="Image 1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row    justify-center items-center">
        <div className=" flex flex-col items-center justify-center  mx-4">
          <h1 className="pt-4 font-bold font-serif text-5xl  md:text-9xl ">
            03
          </h1>

          <div className="">
            <h3 className="font-serif p-2 text-5xl text-yellow-400">
              Blog App
            </h3>
            <h3 className="text-2xl pt-2 font-mono   hover:underline">
              <Link
                href="https://github.com/SUPHAL-MAITY/Blog_App_Frontend"
                target="_blank"
              >
                <span className=" ">GitHub </span>{" "}
              </Link>
            </h3>

            <h3 className="text-2xl pt-2 font-mono   hover:underline">
              <Link
                href="https://blog-app-frontend-blue-seven.vercel.app/"
                target="_blank"
              >
                <span className=" "> Website link </span>{" "}
              </Link>
            </h3>
          </div>
        </div>

        <div className="mx-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] ">
          <Image
            className=" h-[300px]  w-[300px]  rounded-lg mb-4"
            src={project3}
            style={{ padding: "10px", borderRadius: "5%" }}
            alt="Image 1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row    justify-center items-center">
        <div className=" flex flex-col items-center justify-center  mx-4">
          <h1 className="pt-4 font-bold font-serif text-5xl  md:text-9xl ">
            04
          </h1>

          <div className="">
            <h3 className="font-serif p-2 text-5xl text-yellow-400">
              Travel website
            </h3>
            <h3 className="text-2xl pt-2 font-mono   ">
              <span className=" ">GitHub </span>{" "}
            </h3>
          </div>
        </div>

        <div className="mx-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] ">
          <Image
            className=" h-[300px]  w-[300px]  rounded-lg mb-4"
            src={project4}
            style={{ padding: "10px", borderRadius: "5%" }}
            alt="Image 1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row    justify-center items-center">
        <div className=" flex flex-col items-center justify-center  mx-4">
          <h1 className="pt-4 font-bold font-serif text-5xl  md:text-9xl ">
            05
          </h1>

          <div className="">
            <h3 className="font-serif p-2 text-5xl text-yellow-400">
              Landing page of Gym website
            </h3>
            <h3 className="text-2xl pt-2 font-mono   ">
              <span className=" ">GitHub </span>{" "}
            </h3>
          </div>
        </div>

        <div className="mx-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] ">
          <Image
            className=" h-[300px]  w-[300px]  rounded-lg mb-4"
            src={project5}
            style={{ padding: "10px", borderRadius: "5%" }}
            alt="Image 1"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
