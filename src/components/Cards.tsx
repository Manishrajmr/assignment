"use client";
import Image from "next/image";
import { Star } from 'lucide-react';

export default function InnovationSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Upper Part */} 
        <div className="bg-white rounded-4xl shadow-lg border-4 justify-between border-white p-8 flex flex-col md:flex-row items-center gap-10 mt-16">
          {/* Left Image */}
          <div className="">
            <Image
              src="https://www.empireblue.in/_next/image?url=%2Fdetail.png&w=828&q=75" // apni image ka path
              alt="Empire Blue Water Can"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-4">
            <h2 style={{color:"var(--primary)"}} className="text-2xl md:text-4xl font-bold">
              Empire Blue Water Can
            </h2>
            <p className="text-gray-700 leading-relaxed text-[18px]">
              <span className="font-semibold">Empire Blue Pvt. Ltd.</span> Our
              revolutionary water technology is a groundbreaking invention that
              eliminates the expiration date on bottled water. By using a unique
              combination of innovative ingredients, we prevent reactions in
              bottled water—especially when exposed to sunlight—that produce
              microplastics and harmful bacteria.
            </p>
            <p className="text-gray-700 leading-relaxed text-[18px]">
              This addresses major health risks associated with bottled water,
              including diseases like cancer and heart disease. Our innovation
              not only maintains water purity and freshness for life, but also
              provides health benefits such as cancer prevention, heart attack
              protection, and boosted immunity.
            </p>
           
          </div>
        </div>

        {/* Bottom Part (Three Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-4xl justify-start shadow-md border border-gray-200 p-6  hover:shadow-lg transition"
              >
                 <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e6e6ff]">
                <Star className="text-blue-800" />
              </span>
                <h3 style={{color:"var(--primary)"}} className="text-xl font-bold mb-2 mt-2">
                  Revolutionary Technology
                </h3>
                <p className="text-gray-700 leading-relaxed text-[16px]">
                  Groundbreaking invention that eliminates the expiration date
                  on bottled water.
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
