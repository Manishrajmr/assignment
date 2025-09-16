"use client"
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Health Coach",
    location: "Mumbai",
    text: "Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!",
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    role: "Fitness Trainer",
    location: "Delhi",
    text: "I recommend Newtro-X to all my clients. The water feels lighter, fresher, and keeps us energized throughout the day. Truly revolutionary!",
    initials: "RM",
  },
  {
    name: "Ananya Verma",
    role: "Nutritionist",
    location: "Bangalore",
    text: "Hydration has never felt this good. I love how my clients notice the benefits almost instantly. Pure, fresh, and safe – exactly what we need!",
    initials: "AV",
  },
];

const stats = [
  { label: "Average Rating", value: 4.9, suffix: "/5" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
  { label: "Happy Customers", value: 10000, suffix: "+" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter for stats
  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const step = Math.max(1, Math.floor(end / 100));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const copy = [...prev];
          copy[i] = start;
          return copy;
        });
      }, duration / (end / step));
    });
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-blue-50">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="tetxt-4xl md:text-5xl font-bold text-gray-800">
          What Our <span className="text-blue-600">Customers Say</span>
        </h2>
        <p className="text-gray-600 text-[18px] mt-2">
          Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their experience with Newtro-X.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-4xl w-full bg-gray-300 rounded-2xl shadow-md p-12 text-center relative">
        {/* Quote */}
        <p className="text-gray-700 italic text-[18px] mb-6">{testimonial.text}</p>

        {/* Author */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.initials}
          </div>
          <h3 className="font-semibold mt-3">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.location}</p>
        </div>

        {/* Arrows */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="absolute text-black  left-3 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
        >
          ◀
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          className="absolute text-black right-3 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
        >
          ▶
        </button>
      </div>

      {/* Stats Bottom Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-3xl w-full">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">
              {counts[i]}
              {stat.suffix}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
