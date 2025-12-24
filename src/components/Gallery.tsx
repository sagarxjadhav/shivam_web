import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const galleryImages = [
  {
    url: "/s1.jpeg",
    title: "Project Showcase 1",
  },
  {
    url: "/s2.jpeg",
    title: "Project Showcase 2",
  },
  {
    url: "/s3.jpeg",
    title: "Project Showcase 3",
  },
  {
    url: "/s4.jpeg",
    title: "Project Showcase 4",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise across various electrical projects
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="group relative flex-shrink-0 w-[280px] h-[200px] md:w-[400px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <SwiperSlide>
                  {" "}
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-base md:text-xl font-bold text-white">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * 4 - 16px * 4));
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-400px * 4 - 24px * 4));
            }
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
    </section>
  );
}
