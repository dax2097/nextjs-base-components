import { Button } from "@/components/ui/Button";
import Image from "next/image";
import HeroImg from "@/../public/imgs/HOME/HERO.png"

export default function HomeHeroSection() {
  return (
    <section className="w-full min-h-screen h-[490px] flex flex-col items-center justify-center text-orange relative">
      <div className="absolute inset-0 h-[490px] w-full">
        <Image        
          src={HeroImg}
          alt="Fondo hero"
          layout="fill"  // Hace que ocupe todo el contenedor padre
          objectFit="cover" // Se ajusta sin deformarse
          quality={100}
          priority
        />
      </div>
      <div className="max-w-2xl  rounded-lg relative z-10">
        <h1 className="p-4 h4-headline text-white font-founders ">Innovación y Calidad en 
        Plásticos, Metales y Acrílicos
        </h1>
        <p className="p-4 b3-body  text-white font-founders ">
        Líderes en fabricación y desarrollo de productos metálicos y acrílicos a nivel internacional.
                </p>
        <div className="mt-6">
          <Button size="lg">Empezar ahora</Button>
        </div>
      </div>
    </section>
  );
}