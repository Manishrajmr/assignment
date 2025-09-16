import Image from "next/image";

const leaders = [
  {
    name: "Sandhya Mahalwanshi",
    role: "Managing Director",
    image: "https://www.empireblue.in/_next/image?url=%2Fimages%2Fsandhya.jpeg&w=640&q=75", // store inside /public/team/
  },
  {
    name: "U. S. Khobariya",
    role: "Sub-Director",
    image: "https://www.empireblue.in/_next/image?url=%2Fimages%2F1.jpeg&w=640&q=75",
  },
  {
    name: "Mukesh Dixit",
    role: "CFO",
    image: "https://www.empireblue.in/_next/image?url=%2Fimages%2F2.jpeg&w=640&q=75",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">
        Leadership Team
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {leaders.map((leader, i) => (
          <div
            key={i}
            className="flex flex-col relative items-center  w-fit rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="w-40 h-40 relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>

            {/* Info */}
           <div className="absolute bg-white shadow text-sm rounded-2xl p-1 -bottom-4 text-center">
             <h3 className="text-lg font-semibold text-blue-800 ">
              {leader.name}
            </h3>
            <p className="text-gray-600 text-sm">{leader.role}</p>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
}
