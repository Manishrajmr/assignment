"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="bg-blue-50 min-h-screen flex justify-center items-center pt-20 px-4">
      <div
        className={` rounded-[20px] sm:rounded-[40px] relative  z-5  max-w-6xl w-full bg-white shadow-lg overflow-hidden flex flex-col md:flex-row  transition-all duration-1000 ${
          animate ? "fade-up" : ""
        }`}
      >
        {/* Left Side Image */}
        <div className="relative justify-center w-full sm:mx-auto p-10 sm:w-[350px] lg:w-[500px] aspect-[400/380]">
          <Image
            src="https://www.empireblue.in/_next/image?url=%2Fcan1.png&w=1920&q=75" // 👈 apna image public/ folder me daalna
            alt="Empire Blue"
            fill
            className="object-cover position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            priority
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 flex flex-col p-12 justify-start ">
           
            <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
                <Image
                src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
                alt="Logo"
                width={320}
                height={90}

                className="cursor-pointer object-contain mb-8"
                priority
              />
            </Link>
          </div>
           
          <h1 
            className={`text-4xl md:text-5xl text-black font-bold mb-4 transition-all duration-1000 delay-200 ${
              animate ? "fade-up" : ""
            }`}
          >
            Worlds <span style={{ color: "var(--primary)" }} >First Non-Expiry</span> Water
          </h1>

          <p
            className={`text-gray-600 leading-relaxed transition-all duration-1000 delay-400 ${
              animate ? "fade-up" : ""
            }`}
          >
            <span className="font-semibold">Empire Blue Pvt. Ltd.</span> We
            prioritize health, innovation, and sustainability. We are committed
            to setting new industry standards and providing a safe, reliable,
            and beneficial hydration solution for people worldwide.
          </p>

          <div
            className={`mt-6 transition-all duration-1000 delay-600 ${
              animate ? "fade-up" : ""
            }`}
          >
           <Link
              href="/book"
              className="flex size-fit items-center gap-2 bg-[var(--primary)] text-white px-6 py-3  rounded-4xl shadow-md hover:opacity-90 transition"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
