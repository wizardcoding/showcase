"use client";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BreadCrumbActivities from "@/components/BreadCrumbActivities";
import * as animationData from '@/public/projects.json';
import lottie from "lottie-web";

export default function Home() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      // @ts-expect-error data of the container part of a third party code
      container:container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
  }, []);
  const [text] = useTypewriter({
    words: [
      "Hi, my name is Francisco", 
      "This is a showcase page.", 
    ],
    loop: 0,
    delaySpeed: 4000,
  });


  return (
    <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
      <div className="w-full flex flex-col items-start md:w-2/4 mt-0 md:mt-20">
        <h1 className=" 
            text-3xl
            lg:text-5xl
            font-semibold">
          <span className="mr-3 text-slate-300">
            {text}
            <Cursor
              cursorBlinking={true}
              cursorStyle={"/"}
              cursorColor="#2563EB"/>
          </span>
        </h1>
        <p className="text-white text-xl md:text-2xl mb-3 mt-8">
          I&apos;m a frontend developer and backend from time to time.
        </p>
        <div>
          <Button className="
            bg-blue-400 
            text-white 
            px-1 
            rounded 
            mr-4 
            hover:bg-blue-500">
            Learn More
          </Button>
          <Button className="
            border
            border-gray-200
            bg-gray-800
            text-gray-200
            px-4 
            py-1 
            rounded 
            hover:bg-gray-200 
            hover:text-gray-800 
            hover:border-gray-800">
            Contact
          </Button>
        </div>
        <BreadCrumbActivities/>
        <h1 className="text-slate-400 text-sm md:text-3xl">Worked mostly with react but open to new Techs and fun tools</h1>
      </div>
      {/* className="md:w-1/2 z-auto pt-2 md:mt-0" */}
      <div className="container md:w-1/2 z-auto pt-2 md:mt-0 max-h-[45rem] overflow-y-hidden">
        <div ref={container}></div>
      </div>
    </div>
  );
}
