"use client";
import Image from "next/image";

export default function CurrentSituation() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4  text-[14px]">
      <div className="max-w-6xl  mx-auto bg-white rounded-lg shadow-lg p-10 relative flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 sm:text-[18px]   space-y-4">
          <h2 style={{color:"var(--primary)"}} className="md:text-4xl text-[24px]  font-bold">Current Situation</h2>
          <p className="text-gray-700 leading-relaxed">
            Approximately <span className="font-semibold">2.2 billion people</span> do not have access 
            to safe drinking water and <span className="font-semibold">3.5 billion people</span> do not 
            have access to clean drinking water. This problem is increasing due to the rapidly 
            increasing population. Poor water management has further aggravated the crisis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The top countries facing severe water crisis include 
            <span className="font-semibold"> Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia</span>.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-4 sm:text-[18px] md:text-right">
          <h2 style={{color:"var(--primary)"}} className="md:text-4xl text-[24px] font-bold ">
            Health Impact of <br /> Contaminated Water
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every <span className="font-semibold">33 seconds</span> a person dies from heart disease 
            across the world and around <span className="font-semibold">26,300 people</span> die from 
            cancer every day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Contaminated water releases harmful bacteria and micro plastics which leads to serious 
            health problems like <span className="font-semibold">cancer</span>, 
            <span className="font-semibold"> high blood pressure</span>, and 
            <span className="font-semibold"> heart problems</span>.
          </p>
        </div>

    
      </div>
    </section>
  );
}
