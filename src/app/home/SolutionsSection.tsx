import { Button } from "@/components/ui/Button";
import Image from "next/image";
import HeroImg from "@/../public/imgs/HOME/HERO.png"
import WORKER  from "@/../public/placeholder-image.jpg"


export default function SolutionsSection() {
  return (
    <section> 
      <div className="w-full px-6 py-8  min-h-[1081px] sm:min-h-[590px]  flex flex-col gap-8 ">
        <div className="relative w-full min-h-[425px]">
            <Image 
                src={WORKER}
                alt="Worker"      
                layout="fill" 
                objectFit="cover"           
            />
        </div>
        <div>
            <p className=" font-inter h4-headline font-bold">
                Soluciones personalizadas
            </p>
            <p className=" font-inter h4-headline font-bold text-orange-normal">
                para sectores industriales
            </p>
        </div>
        <div>
            <div className="w-full h-[7px] bg-orange-normal"></div>
        </div>
        <div>
            <p className="font-inter b4-body font-light">
            En GRUPO PMA, nos especializamos en la fabricación de productos metálicos y acrílicos, combinando tecnología de punta con un equipo altamente calificado. Nuestra pasión por la innovación, el compromiso con la calidad y la sustentabilidad nos ha posicionado como un referente en la industria a nivel internacional.
            </p>                  
        </div>

        <div>
        <p className="font-inter b4-body font-light">
            Fundados en Chihuahua, México, hemos expandido nuestro alcance globalmente, atendiendo las necesidades de diversos sectores industriales con soluciones personalizadas y eficientes.
            </p>
        </div>
       </div>       
    </section>
  );
}
