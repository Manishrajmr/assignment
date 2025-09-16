import Image from "next/image";


export default function FounderSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-gray-50">
      {/* Heading */}
      <h2 style={{color:"var(--primary)"}} className="text-4xl md:text-6xl   font-bold text-center  mb-12">
        Meet Our Expert Team
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left Image with Floating Box */}
        <div className="relative w-full flex justify-center">
          <div className="w-[90%] md:w-[85%] relative rounded-4xl  border-8 border-white shadow-lg">
            <Image
              src="https://www.empireblue.in/_next/image?url=%2Fimages%2Fgagan.jpeg&w=1200&q=75" // replace with your founder image path (public/team/founder.jpg)
              alt="Dr. Gagan Mahalwanshi"
              width={600}
              height={500}
              className="object-cover rounded-4xl w-full h-auto"
              priority
            />
            {/* Floating Box */}
            <div className="absolute  left-4 -bottom-8 bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-blue-800">
                Dr. Gagan Mahalwanshi
              </h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                 
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                 
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 transition"
                >
                  
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            About the Founder
          </h3>
          <p className="text-gray-600 text-[18px] leading-relaxed">
            With over 15 years of experience in the water industry,{" "}
            <span className="font-semibold text-blue-700">
              Dr. Gagan Mahalwanshi
            </span>{" "}
            has pioneered revolutionary water purification technologies. His
            vision for <span className="font-semibold">Newtro-X</span> is to
            create water solutions that are both sustainable and beneficial for
            health.
          </p>
        </div>
      </div>
    </section>
  );
}
