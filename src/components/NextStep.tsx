import React from 'react';

const NextStep = () => {
  return (
    <section className="w-full bg-gray-300 py-12 md:py-20 ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="relative bg-[#f8fcff] rounded-2xl shadow-lg text-center px-6 md:px-12 py-10 md:py-16">
      {/* Decorative Dots (Top Left) */}
      <span className="absolute top-4 left-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      </span>

      {/* Decorative Dots (Top Right) */}
      <span className="absolute top-4 right-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      </span>

      {/* Decorative Dots (Bottom Left) */}
      <span className="absolute bottom-4 left-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      </span>

      {/* Decorative Dots (Bottom Right) */}
      <span className="absolute bottom-4 right-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      </span>

      {/* Heading */}
      <h2 className=" text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
        Take the{" "}
        <span className="text-[#030098] text-4xl md:text-5xl">Next Step</span>{" "}
        <br />
        <span className="text-green-500 text-4xl ">Towards Better Health</span>
        
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
        Empire Blue Operates in the growing health and wellness market health 
        conscious individuals seeking natural solutions for disease prevention 
        and immune support with increasing awareness of health risks like cancer 
        and heart disease demand for mineral-based supplements in mineral water. 
        Ready to experience our exceptional innovative water? Book your first can 
        today and discover how we can help you live your healthiest life.
      </p>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-[#030098] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 transition">
          Book Now
        </button>
      </div>
    </div>
  </div>
</section>

  );
}

export default NextStep;
