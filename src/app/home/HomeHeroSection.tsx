import { Button } from "@/components/ui/Button";
import Image from "next/image";
import HeroImg from "@/../public/imgs/HOME/HERO.png"
import HRN  from "@/../public/LOGOS/LogosEmpresasHermanas/HRN.png"
import LEAN  from "@/../public/LOGOS/LogosEmpresasHermanas/LEAN.png"
import PMA  from "@/../public/LOGOS/LogosEmpresasHermanas/PMA.png"
import SC  from "@/../public/LOGOS/LogosEmpresasHermanas/SC.png"

export default function HomeHeroSection() {
  return (
    <section> 
      <div className="w-full relative min-h-[490px] sm:min-h-[590px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={HeroImg}
          alt="Fondo hero"
          layout="fill" // Hace que ocupe todo el contenedor
          objectFit="cover" // Ajusta la imagen sin deformarse
          quality={100}
          priority
        />
      </div>

       {/* Contenedor que se ajusta de forma fluida */}
       <div className="relative  flex flex-col gap-8 z-10 w-full px-6 py-10  rounded-lg">
        <h1 className="font-founders h5-headline text-white ">
          Innovación y Calidad en Plásticos, Metales y Acrílicos
        </h1>
         <p className="font-inter b1-body text-white font-light break-after-auto">
           Líderes en fabricación y desarrollo de productos metálicos y acrílicos a nivel internacional.
         </p>
         <div >
           <Button className="text-white w-full bg-orange-normal hover:bg-orange-normal-hover font-inter font-normal button-lg" size="giant">Descubre más</Button>
         </div>
       </div>
       </div>
       <div className="flex flex-row px-6 h-[78px] items-center justify-center gap-4 bg-grey-light">
        <div className="relative w-1/4 h-[30px]">
            <Image 
              src={LEAN}
              alt="LEAN"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
            />
          </div>
          <div className="relative w-1/4 h-[30px]">
            <Image 
              src={HRN}
              alt="LEAN"
              layout="fill" 
              objectFit="contain" 
              quality={100}
              priority
            />
          </div>
          <div className="relative w-1/4 h-[30px]">
            <Image 
              src={PMA}
              alt="LEAN"
              layout="fill" 
              objectFit="contain" 
              quality={100}
              priority
            />
          </div>
          <div className="relative w-1/4 h-[30px]">
            <Image 
              src={SC}
              alt="LEAN"
              layout="fill" 
              objectFit="contain" 
              quality={100}
              priority
            />
          </div>        
       </div>
    </section>
  );
}
// import { Button } from "@/components/ui/Button";
// import Image from "next/image";
// import HeroImg from "@/../public/imgs/HOME/HERO.png"

// export default function HomeHeroSection() {
//   return (
//     <section className="w-full min-h-screen flex flex-col items-center justify-center text-orange relative">
//       <div className="absolute inset-0 w-full h-[490px]">
//         <div className="img-container ">
//           <Image        
//             src={HeroImg}
//             alt="Fondo hero"
//             layout="fill"  // Hace que ocupe todo el contenedor padre
//             objectFit="cover" // Se ajusta sin deformarse
//             quality={100}
//             priority
//           />
//         </div>
//       </div>

//       {/* Contenedor que se ajusta de forma fluida */}
//       <div className="relative z-10 w-full  rounded-lg">
//         <h1 className="font-founders h5-headline text-white pb-4">
//           Innovación y Calidad en Plásticos, Metales y Acrílicos
//         </h1>
//         <p className="font-inter b1-body text-white font-light break-after-auto pt-4">
//           Líderes en fabricación y desarrollo de productos metálicos y acrílicos a nivel internacional.
//         </p>
//         <div className="mt-6">
//           <Button size="lg">Empezar ahora</Button>
//         </div>
//       </div>
//     </section>
//   );
// }