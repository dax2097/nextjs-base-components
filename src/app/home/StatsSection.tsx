import HomeCardStats from "@/components/home/HomeCardStats";


export default function StatsSection() {
  return (
    <section> 
      <div className="w-full sm:min-h-[590px]  flex flex-col gap-6 ">
           <HomeCardStats statText="3+" statDescription="Presencia en <b> México, Estados Unidos </b>  y <b>Portugal</b>."/>
           <HomeCardStats statText="17+" statDescription="Servicios <b>disponibles</b>"/>
           <HomeCardStats statText="95%" statDescription="Nuestros <b>clientes satisfechos</b>"/>
       </div>       
    </section>
  );
}
