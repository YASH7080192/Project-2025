import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "HiringEngineers helped us find the perfect architect for our home project. The engineer was skilled, professional, and delivered on time.",
      role: "Senior Architect",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Khan",
      review:
        "I am extremely happy with the service. The engineer provided excellent structural design solutions for our commercial building.",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikram Singh",
      review:
        "Highly skilled engineers with a great understanding of home architecture. Would definitely recommend HiringEngineers!",
      role: "Construction Consultant",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        What Our Clients Say
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="p-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500"
                />
                
                {/* Review */}
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                
                {/* Name & Role */}
                <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

