'use client'
import Desc from '../Desc';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imageSources = Array.from({length:45},(e,i)=>{ return `/${i}.png`})

const Img = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Zmieniamy obrazki automatycznie co 200 ms (lub inny czas)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageSources.length - 1 ? prevIndex : prevIndex + 1
      );
    }, 150); // Dopasuj interwał do prędkości efektu wyostrzania

    return () => clearInterval(interval);
  }, []);

  return (
    <>


<Desc/>  


    <div className="hidden md:block col-span-full relative w-full  h-[497px] md:col-span-2 lg:col-start-3 self-end">
      {imageSources.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }} // Zmiana przezroczystości tylko dla aktualnego obrazu
          transition={{ duration: 0.5 }} // Czas trwania płynnego przejścia między obrazami
          className=" absolute top-0 left-0 h-[497px] w-auto " // Obrazy nakładają się na siebie
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      ))}

    </div>





 </>
  ); 
};

export default Img;
