import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ButtonPageUp from "./ButtonPageUp";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RecipeCard from "./RecipeCard";

function CarouselRecommendations() {
  const location = useLocation();
  const [isMeal, setIsMeal] = useState(false);
  const recommendedDrinks = useSelector(
    (state) => state.meals.recommendationsDrinks
  );
  const recommendedMeals = useSelector(
    (state) => state.drinks.recommendationsMeals
  );

  useEffect(() => {
    if (location.pathname.includes("meals")) {
      setIsMeal(true);
    } else {
      setIsMeal(false);
    }
  }, []);

  const recommendedRecipe = () => {
    let recomended;
    if (location.pathname.includes("meals")) {
      recomended = recommendedDrinks;
    } else if (location.pathname.includes("drinks")) {
      recomended = recommendedMeals;
    }
    return recomended;
  };

  return (
    <div className="slide-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        fadeEffect={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {recommendedRecipe().map((recipe, index) => (
        <SwiperSlide key={index} className="slide-content">
          <RecipeCard 
          key={index}
          recipe={recipe}
          page={ isMeal ? "/drinks" : "/meals" }
        />
        </SwiperSlide>
      ))}
    </Swiper>
      <ButtonPageUp />
    </div>
  );
}

export default CarouselRecommendations;
