import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slider = props => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const swiperRef = useRef(null);

  const handleSlideChange = swiper => {
    setCurrentSlide(swiper.realIndex);
  };

  const toggleAutoplay = () => {
    const swiper = swiperRef.current.swiper;

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }

    setIsAutoplayEnabled(!isAutoplayEnabled);
  };

  return (
    <div id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <Swiper
            ref={swiperRef}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              enabled: isAutoplayEnabled,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <img src="../../assets/images/slider01.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/images/slider02.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/images/slider03.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/images/slider04.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide-count-wrap">
          <span className="slide-count">{currentSlide + 1} / 4</span>
          <Link
            to="/"
            className={`btn-play ${isAutoplayEnabled ? '' : 'on'}`}
            onClick={toggleAutoplay}
          >
            {isAutoplayEnabled ? 'Pause' : 'Play'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
