"use client";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./L";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function Chessproject() {
  const { language } = useContext(LanguageContext);

  const appDescription = {
    pl: [
      "Moje najlepsze lifty z zawodów to:",
     "-245 kg w przysiadzie",
     "-142,5 kg w wyciskaniu leżąc",
     "-285 kg w martwym ciagu",
    ],
    en: [
      "My best lifts at competition are:",
      "-245 kg squat",
      "-142,5 kg bench press",
      "-285 kg deadlift",
    ],
  };
  return (
    <>
      <div className="grid col-span-full mds:col-span-2  gap-y-2 mds:gap-y-1  font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        <h1 className="text-center hidden mds:block">
          {language == "pl" ? "Trójbój to moja największa pasja" : "Powerlifting is my biggest passion"}
        </h1>
        {appDescription[language].map((e, i) => {

 const classs = i == 0 ? "text-base md:text-lg  m-auto" : "text-base md:text-lg px-20 lg:px-60"


          return (
            <div key={i} className={classs}>
              {e}
            </div>
          );
        })}



        <Button
          href="https://www.openpowerlifting.org/u/przemyslawkonieczny"
          as={Link}
          color="secondary"
          showAnchorIcon
          variant="solid"
          className="m-auto"
        >
          {language == "pl" ? "Historia moich startów" : "My Competition History"}
        </Button>
      </div>

      <div className="m-auto row-start-1 col-span-full mds:col-start-3 mds:col-span-2 m-auto font-vt323 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        <h1 className="text-center block mds:hidden">
        {language == "pl" ? "Trójbój to moja największa pasja" : "Powerlifting is my biggest passion"}
        </h1>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <Image
width={800}
height={800}
 src={"/podium.jpg"}
  className="border-4 m-auto border-purple-500 rounded-lg shadow-lg  h-[200px] w-[300px] mds:h-[400px] mds:w-[500px]"
/>
  

      </div>
    </>
  );
}



