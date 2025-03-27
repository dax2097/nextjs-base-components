import HomeCarousel from "@/components/home/HomeCarousel";


export default function NeedsSection() {
  return (
    <section> 
      <div className="w-full sm:min-h-[590px]  flex flex-col gap-4 ">
      <h3 className='font-inter h4-headline font-bold px-layout pt-10 pb-6'>
        Contamos con un servicio a la <span className='text-orange-normal'>medida de tus necesidades</span>
        </h3>
            
       </div>  
       <HomeCarousel />     
    </section>
  );
}
