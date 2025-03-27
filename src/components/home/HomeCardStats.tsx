import React from 'react'

interface HomeCardStatsProps  {
    statText: string,
    statDescription: string
}

function parseBoldText(text: string) {
    const parts = text.split(/<b>(.*?)<\/b>/gi);
    return parts.map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
}

function HomeCardStats({statText, statDescription} : HomeCardStatsProps) {
  return (
    <div className='min-h-[174px] w-full bg-grey-light flex items-center justify-center px-6'>
        <div className="flex flex-row contenedor w-[280px] h-[64px]  ">
            <div className=" w-2/5 font-inter h3-headline font-black flex items-center ">
            {statText}
            </div>
            <div className="flex flex-col w-3/5 gap-5">
                <div className="font-inter b3-body">
                {parseBoldText(statDescription)}
                </div>
                <div>
            <div className="w-full h-[5px] bg-orange-normal"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCardStats