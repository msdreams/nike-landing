/* eslint-disable react/prop-types */
import { useState } from "react";

export function ItemsCarousel({ items, onClickCart }) {
  const slidesPerView = 4;
  const sliderLength = items.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Функции для навигации
  const nextSlide = () => {
    if (currentSlide + slidesPerView < items.length) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="relative mt-8 w-full">
      {/* Стрелки навигации */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10 disabled:opacity-50"
      >
        &#60;
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide + slidesPerView >= items.length}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10 disabled:opacity-50"
      >
        &#62;
      </button>

      {/* внешний контейнер слайдов */}
      <div className="overflow-hidden">
        {/* Контейнер слайдов */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / sliderLength}%)`, // Плавное движение слайдов
            width: `${(items.length / slidesPerView) * 100}%`, // Делаем контейнер слайдов шире, чтобы вмещать все элементы
          }}
        >
         {/* Слайды */}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-1/6 cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => onClickCart(item)}
            >
              <img src={item.src} alt={item.name} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Пагинация */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {Array.from({ length: Math.ceil(items.length / slidesPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index * slidesPerView)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index * slidesPerView ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
