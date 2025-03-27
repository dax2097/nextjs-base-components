"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Isotipo from "@/../public/ICONOS/ISOTIPO-1.png"
import { Button } from "../ui/Button";

interface slideProps {
  id: number,
  title: string[],
  description: string,
  image: string
}

const slides : slideProps[] = [
  {
    id: 1,
    title: ["SHEET", "METAL"],
    description:
      "Contamos con tecnología de corte y grabado láser para lámina y tubo, proporcionando piezas metálicas de alta precisión y tolerancias ajustadas, ideales para industrias exigentes.",
    image: "/imgs/HOME/HOME-3.png",
  },
  {
    id: 2,
    title: ["SHEET", "METAL"],
    description:
      "Contamos con tecnología de corte y grabado láser para lámina y tubo, proporcionando piezas metálicas de alta precisión y tolerancias ajustadas, ideales para industrias exigentes.",
    image: "/imgs/HOME/HOME-1.png",
  },
  {
    id: 3,
    title: ["SHEET", "METAL"],
    description:
      "Contamos con tecnología de corte y grabado láser para lámina y tubo, proporcionando piezas metálicas de alta precisión y tolerancias ajustadas, ideales para industrias exigentes.",
    image: "/imgs/HOME/HOME-2.png",
  },
  {
    id: 4,
    title:["SHEET", "METAL"],
    description:
      "Contamos con tecnología de corte y grabado láser para lámina y tubo, proporcionando piezas metálicas de alta precisión y tolerancias ajustadas, ideales para industrias exigentes.",
    image: "/imgs/HOME/HOME-4.png",
  },
  {
    id: 5,
    title: ["SHEET", "METAL"],
    description:
      "Contamos con tecnología de corte y grabado láser para lámina y tubo, proporcionando piezas metálicas de alta precisión y tolerancias ajustadas, ideales para industrias exigentes.",
    image: "/imgs/HOME/HOME-5.png",
  },
];
export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      //nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[750px] bg-orange-normal  overflow-hidden px-layout pt-6">
      <motion.div
        key={current}
        className="flex"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={ { type: "spring", stiffness: 100, duration: 0.8  }}
        
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full flex flex-col gap-10  ${index === current ? "block" : "hidden"}`}
          >
            <div className="flex flex-row gap-6 items-center h-[90px]">
                <Image
                height={90} 
                src={Isotipo}
                alt="Descripcion"
                />
              <div className="flex flex-col gap-3 ">
                {
                  slide.title.map((singleTitle)=> {
                      return(
                        <p className="flex text-white font-inter h4-headline font-bold " >{singleTitle}</p>                      
                      )
                  })
                }
              </div>
            </div>
            <p className="font-inter b1-body font-light text-white ">{slide.description}</p>
            <div className="relative w-full h-[240px]">
              <Image 
                src={slide.image} 
                alt={slide.title[0]}  
                fill 
                className="object-cover w-full h-full rounded-lg" 
              />  
            </div>
            
            <div >
              <Button className="text-black w-full bg-white hover:bg-orange-normal-hover font-inter font-semibold button-lg mt-10" size="huge">Más información</Button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Botones de navegación */}
      {/* <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ▶
      </button> */}

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.span
            key={index}
            className="w-3 h-3 rounded-full bg-gray-400"
            animate={{ 
              scale: index === current ? 1.3 : 1, 
              opacity: index === current ? 1 : 0.5,
              backgroundColor: index === current ? "#ffffff" : "#9ca3af",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        ))}
      </div>
    </div>
  );
}