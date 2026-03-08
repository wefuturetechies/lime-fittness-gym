import React from "react";
import "../styles/gallery.css";
import images from "../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {

  const galleryImages = [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4
  ];

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-header">
        <h2>
          Our <span>Gallery</span>
        </h2>
        <p>Experience the energy of our gym</p>
      </div>

      <div className="gallery-slider">

        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          slidesPerView={1.4}
          spaceBetween={30}
          loop={true}
          speed={900}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >

          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="slide-card">
                <img src={img} alt={`Gym ${i + 1}`} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Gallery;