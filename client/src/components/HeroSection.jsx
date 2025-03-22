import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
    const engineerImages = [
        "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://media.istockphoto.com/id/457740707/photo/repairman-in-factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=kWQsgbNBKsauVu3srpnHkCPH5nVO_5xobUamnVGyJs4=",
        "https://media.istockphoto.com/id/1056422796/photo/electric-light-point-installing.webp?a=1&b=1&s=612x612&w=0&k=20&c=4zxiQaZkkErNA3Fy__-JdPrhQNpnQ1RqpWGFXBT6CAQ=",
        "https://images.unsplash.com/photo-1580983703451-bf6bb44a9917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlJTIwZW5naW5uZXJpbmd8ZW58MHx8MHx8fDA%3D",
    ];

    return (
        <div className="relative w-full h-screen">
            {/* Background Image Slider */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="absolute inset-0 w-full h-full"
            >
                {engineerImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            {/* Hero Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 ">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Hire Engineers for Home
                    </h1>
                    <h2 className="text-lg md:text-xl text-gray-200 mt-4">
                        Get the best engineers for your company. Quality work, guaranteed.
                    </h2>
                </div>
            </div>
        </div>
    );
}

