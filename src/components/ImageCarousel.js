import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImageCarousel() {
  const images = [
    "/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg", "/c5.jpg",
    "/c6.jpg", "/c7.jpg", "/c8.jpg", "/c9.jpg", "/c10.jpg",
    "/c11.jpg", "/c12.jpg", "/c13.jpg", "/c1.jpg", "/c2.jpg",
    "/c3.jpg", "/c4.jpg", "/c5.jpg"
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <div className="max-w-6xl w-full px-2"> {/* center limit */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 },   // mobile
            640: { slidesPerView: 4, spaceBetween: 8 },   // tablet
            1024: { slidesPerView: 7, spaceBetween: 10 }, // desktop
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center">
                <img
                  src={img}
                  alt={`carousel-${i}`}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
