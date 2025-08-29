"use client";
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

const stats=[
  {
    num: 63,
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
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startCounting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 0.3 } // Activa cuando el 30% del componente es visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [startCounting]);

  return (
    <section ref={statsRef} className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-y-6 justify-center xl:justify-between max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((item, index)=>{
            return (
              <div 
                className='flex flex-col gap-2 items-center justify-center xl:flex-row xl:gap-4 xl:justify-start xl:items-start w-[40%] xl:w-auto xl:min-w-[150px]'
                key={index}>
                <CountUp 
                end={startCounting ? item.num : 0} 
                duration={5}  
                delay={0.5} 
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