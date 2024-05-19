import React, { useEffect } from "react";
import mjximg from "../assets/mjx.png";
import { emaillink, githubLink, linkedinLink, twitterLink } from "../utils/links";

export default function HeroSection() {
  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth >= 1024) { // 1024px is the breakpoint for laptops and bigger screens in Tailwind CSS
        const distance = window.scrollY;
        // Move the mask div to the right and out of the screen on scroll
        document.getElementById("mask").style.transform = `translateX(${distance * 1.9}px)`;
        // Move the home div to the left on scroll
        document.getElementById("home").style.transform = `translateX(${
          -distance * 0.8
        }px)`;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section id="home" className="text-gray-300 w-full z-40 bg-black body-font overflow-hidden">
      <div className="container lg:py-16 mx-auto z-50 bg-black">
        <div className="lg:w-9/10 mx-auto z-50 flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 ml-6 mt-6 lg:mt-0">
            <h1 className="text-[#76BEF8] sm:ml-3 lg:ml-0 text-bas title-font font-mono mb-[-30px]">
              Hey, my name is
            </h1>{" "}
            <br />
            <a href="https://www.linkedin.com/in/mrityunjay-shrivastava/" target="_blank">
              <h1 className="text-[#cce7f6] w-max sm:ml-3 lg:ml-0 text-4xl md:text-5xl lg:text-6xl pt-5 title-font font-semibold hover:text-[#76BEF8] duration-300 mb-[-10] ">
                Mrityunjay<br className="block md:hidden"/> Shrivastava
              </h1>
            </a>{" "}
            <br />
            <p className="text-xl my-2">
              <span className="text-[#76BEF8]">Education:</span> B.Tech Information Technology,<br/> Manipal University Jaipur{" "}
              <span className="text-[#76BEF8]">(2020-24)</span>
            </p>
            <p className="text-xl my-2">
              <span className="text-[#76BEF8]">Occupation:</span> SDE Intern,<br className="block md:hidden"/> Hughes Systique Corporation
            </p>
            <p className="text-xl my-2">
              <span className="text-[#76BEF8]">Interests:</span> Web, Cloud, JS
            </p>
            <div className="text-xl hidden md:block  w-1 sm:w-2/3">
              <span className="text-[#76BEF8] mr-4">Socials: </span>
              <div className="inline flex mt-4">
                <div>
                  <button className="text-white mr-2 bg-blue-500 hover:bg-blue-700 duration-300 inline rounded-2xl text-sm px-4 md:px-5 mb-4 py-1">
                    <a href={twitterLink}> Twitter </a>
                  </button>
                </div>
                <div>
                  <button className="text-white mx-2 bg-gray-500 hover:bg-gray-700 duration-300 inline rounded-2xl text-sm px-4 md:px-5 mb-4 py-1">
                    <a href={githubLink}> Github </a>
                  </button>
                </div>
                <div>
                  <button className="text-white mx-2 bg-blue-600 hover:bg-blue-800 duration-300 inline rounded-2xl text-sm px-4 md:px-5 mb-4 py-1">
                    <a href={linkedinLink}> LinkedIn </a>
                  </button>
                </div>
                <br/>
                <div>
                  <button className="text-white bg-red-500 hover:bg-red-700 duration-300 inline rounded-2xl text-sm px-3 md:px-5 mb-4 py-1">
                    <a href={`mailto:${emaillink}`}> {emaillink} </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-xl visible md:hidden">
              <span className="text-[#76BEF8] mr-4">Socials: </span>
              
        <div className="flex flex-wrap justify-center">
          <div className="m-2">
            <button className="text-white bg-blue-500 hover:bg-blue-700 duration-300 rounded-2xl text-sm px-4 md:px-5 py-1">
              <a href="https://twitter.com/mjxshrivastava">Twitter</a>
            </button>
          </div>
          <div className="m-2">
            <button className="text-white bg-gray-500 hover:bg-gray-700 duration-300 rounded-2xl text-sm px-4 md:px-5 py-1">
              <a href="https://github.com/Mrityunjay20">Github</a>
            </button>
          </div>
          <div className="m-2">
            <button className="text-white bg-blue-600 hover:bg-blue-800 duration-300 rounded-2xl text-sm px-4 md:px-5 py-1">
              <a href="https://www.linkedin.com/in/mrityunjay-shrivastava/">
                LinkedIn
              </a>
            </button>
          </div>
          <div className="m-2">
            <button className="text-white bg-red-500 hover:bg-red-700 duration-300 rounded-2xl text-sm px-3 md:px-5 py-1">
              <a href={`mailto:${emaillink}`}>{emaillink}</a>
            </button>
          </div>
      </div>
            </div>
            <div className="flex mt-4 items-center pb-5 border-b-2 border-black mb-5"></div>
          </div>
          <div id="mask" className="relative invisible z-50 lg:visible lg:w-80 lg:h-80 ml-[16%] mt-10">
            <img src={mjximg} className="rounded-full w-80 h-80 absolute inset-0" />
            <div className="rounded-full w-full h-full border-8 border-red-500 border-opacity-75 absolute top-0 left-0 animate-pulse"></div>
            <div className="rounded-full w-full h-full border-8 border-blue-500 border-opacity-75 absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
