import Image from "next/image";

export default function HealthBenefits() {
  return (
    <section className="w-full bg-[#f5f7fb] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center sm:p-8 rounded-4xl shadow-lg ">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#030098]">
          Health <span className="text-green-500">Benefits</span>
        </h2>
        <p className="text-gray-700 mt-4 mb-12  text-[18px] max-w-3xl mx-auto">
          Discover the key nutrients and their powerful effects on your health
        </p>

        {/* Content Wrapper */}
        <div className="relative flex flex-col md:flex-row flex-wrap justify-center items-center ">
          {/* Center Circle with Lungs Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center shadow-lg">
            <div className="w-40 h-40 md:w-52 md:h-52 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/lungs.png" // apna center wala image path
                alt="Lungs"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <div className="">
             {/* Nutrient Cards - Absolute Positioned */}
          {/* Top Left */}
          <div className="absolute  top-0 left-0 md:top-8 max-w-xs text-left">
            <h3 className="text-[#030098] font-bold text-lg">Anthoxanthin</h3>
            <p className="text-green-600 font-semibold">Healthy Bone</p>
            <p className="text-gray-700 text-sm md:text-base">
              Antioxidant properties beneficial for cancer treatment and heart
              health. Improves blood flow and reduces oxidative stress.
            </p>
          </div>

          {/* Bottom Left */}
          <div className="absolute   bottom-0 left-0 md:bottom-8 max-w-xs text-left">
            <h3 className="text-[#030098] font-bold text-lg">Carotenoids</h3>
            <p className="text-green-600 font-semibold">Immunity Booster</p>
            <p className="text-gray-700 text-sm md:text-base">
              Essential for vitamin A production supporting immune health.
             
            </p>
          </div>

          {/* Top Right */}
          <div className="absolute  top-0 right-0 md:top-8 max-w-xs text-left">
            <h3 className="text-[#030098] font-bold text-lg">Chlorophyll</h3>
            <p className="text-green-600 font-semibold">Healthy Lungs</p>
            <p className="text-gray-700 text-sm md:text-base">
              Strengthens the immune system and helps block cancer-causing
              chemicals. Aids in weight loss and lowers cholesterol levels.
            </p>
          </div>

          {/* Bottom Right */}
          <div className="absolute  bottom-0 right-0 md:bottom-8 max-w-xs text-left">
            <h3 className="text-[#030098] font-bold text-lg">Lycopene</h3>
            <p className="text-green-600 font-semibold">Healthy Heart</p>
            <p className="text-gray-700 text-sm md:text-base">
              Powerful antioxidant that reduces oxidative damage and
              inflammation. Protects against various cancers and supports heart
              health.
            </p>
          </div>
        </div>
          </div>

         
      </div>
    </section>
  );
}
