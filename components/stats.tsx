"use client";
import CountUp from 'react-countup';

const stats=[
  {
    num: 60,
    text: "Repositories on GitHub"
  },
  {
    num: 4,
    text: "Years of Experience"
  },
  {
    num: 200,
    text: "Code Commits"
  },
  {
    num: 8,
    text: "Technologies Mastered"
  }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-y-6 justify-center xl:justify-between max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((item, index)=>{
            return (
              <div 
                className='flex flex-col gap-2 items-center justify-center xl:flex-row xl:gap-4 xl:justify-start xl:items-start w-[40%] xl:w-auto xl:min-w-[150px]'
                key={index}>
                <CountUp 
                end={item.num} 
                duration={5}  
                delay={2} 
                className='text-4xl xl:text-6xl font-extrabold text-accent'/>
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80 text-center xl:text-left`}>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;