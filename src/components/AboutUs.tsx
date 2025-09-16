"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full bg-gray-50 py-16 text-[18px] px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 style={{color:"var(--primary)"}} className="text-4xl md:text-5xl font-bold">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Empire Blue Pvt. Ltd.</span> Established July 2025 Based on 
            Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as 
            the world's first manufacturer of non-expiry bacteria free water bottles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to revolutionize the way people consume water by ensuring purity, longevity, 
            and health benefits in every drop.
          </p>

          <button
            className="flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3  rounded-4xl shadow-md hover:opacity-90 transition"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-xl overflow-hidden  border-white border-8 shadow-lg max-w-sm">
            <Image
              src="https://www.empireblue.in/_next/image?url=%2Fabout.jpeg&w=1920&q=75" // apni image ka path yaha do
              alt="Empire Blue"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
