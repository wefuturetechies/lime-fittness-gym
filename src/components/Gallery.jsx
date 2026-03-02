import React from "react";
import "../styles/gallery.css";
import images from "../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Gallery = () => {
  console.log(images.gallery1);
  console.log(images.gallery2);
  console.log(images.gallery3);
  console.log(images.gallery4);
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
  slidesPerView={1.6}
  spaceBetween={0}
  loop={true}
  speed={900}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}

>
          <SwiperSlide>
            <div className="slide-card">
              <img src={images.gallery1} alt="Gym 1" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-card">
              <img src={images.gallery2} alt="Gym 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-card">
              <img src={images.gallery3} alt="Gym 3" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-card">
              <img src={images.gallery4} alt="Gym 4" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;