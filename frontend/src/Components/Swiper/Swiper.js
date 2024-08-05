
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'banner.png'} alt="Slide 9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}