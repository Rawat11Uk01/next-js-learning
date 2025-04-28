"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: `Fractal Analytics has had the pleasure of working with Mentorskool for a number of learning requirements. We have been more than impressed with their program design and delivery. The quality of programs run by them is top notch and they have a great way of keeping the audience engaged and participating.`,
    author: "Arjun Sivasundar, L&D head",
    companyLogo: "/fractal-logo.png", // Put your logo in public folder
    image: "/testimonial-person.png", // Image from public folder
  },
  {
    quote: `Fractal Analytics has had the pleasure of working with Mentorskool for a number of learning requirements. We have been more than impressed with their program design and delivery. The quality of programs run by them is top notch and they have a great way of keeping the audience engaged and participating.`,
    author: "Arjun Sivasundar, L&D head",
    companyLogo: "/fractal-logo.png", // Put your logo in public folder
    image: "/testimonial-person.png", // Image from public folder
  },
  // Add more slides if you want
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => (
            <div className="min-w-0 flex-[0_0_100%] px-4" key={index}>
              <div className="flex flex-col md:flex-row bg-[#f4f8fe] rounded-lg overflow-hidden shadow-md">
                <div className="flex flex-col justify-center p-8 md:w-2/3">
                  <p className="text-lg font-medium mb-6">{item.quote}</p>
                  <div className="font-semibold">{item.author}</div>
                  {/* <img
                    src={item.companyLogo}
                    alt="Company Logo"
                    className="mt-2 h-8 object-contain"
                  /> */}
                  img
                </div>
                <div className="md:w-1/3">
                  {/* <img
                    src={item.image}
                    alt="Testimonial"
                    className="h-full w-full object-cover"
                  /> */}
                  img
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-1/2 left-2 z-10 flex items-center">
        <button onClick={scrollPrev} className="rounded-full bg-white shadow">
          ◀
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-2 z-10 flex items-center">
        <button onClick={scrollNext} className="rounded-full bg-white shadow">
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 rounded-full bg-gray-300 ${
              emblaApi?.selectedScrollSnap() === index && "bg-blue-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
