/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Импорт базовых стилей
// // import 'swiper/css/navigation'; // Стиль для Navigation
// // import 'swiper/css/pagination'; // Стиль для Pagination

import "../../node_modules/swiper/swiper.css"

export function ItemsCarousel({ items, onClickCart }) {
  return (
    <div className="grid relative mt-8 w-full">
      <Swiper
        navigation 
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => onClickCart(item)}
            >
              <img src={item.src} alt={item.name} className="w-full h-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



