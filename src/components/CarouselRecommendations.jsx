import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonPageUp from "./ButtonPageUp";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CarouselRecommendations() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMeal, setIsMeal] = useState(false);
  const [page, setPage] = useState('');
  const recommendedDrinks = useSelector(
    (state) => state.meals.recommendationsDrinks
  );
  const recommendedMeals = useSelector(
    (state) => state.drinks.recommendationsMeals
  );

  useEffect(() => {
    if (location.pathname.includes("meals")) {
      setIsMeal(true);
      setPage("drinks");
    } else {
      setIsMeal(false);
      setPage("meals");
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

  const handleOpenRecipe = (id) => {
    if (isMeal) {
      navigate(`/${page}/${id}`)
    } else{
      navigate(`/${page}/${id}`)
    }
  };

  return (
    <div className="slide-container">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={2}
      fadeEffect={true}
      pagination={{ clickable: true, el: '.swiper-pagination', dynamicBullets: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {recommendedRecipe().map((recipe, index) => (
        <SwiperSlide key={index} className="slide-content">
          <div className="card-wrapper">
            <div className="card">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img
                    className="card-img"  
                    src={isMeal ? recipe.strDrinkThumb : recipe.strMealThumb}
                    alt={isMeal ? recipe.strDrink : recipe.strMeal}
                  />
                </div>
              </div>
              <div className="card-content">
                <h3>{isMeal ? recipe.strDrink : recipe.strMeal}</h3>
                <p>{recipe.strCategory}</p>
                <button
                type="button"
                onClick={ () => handleOpenRecipe(page==="meals" ? recipe.idMeal : recipe.idDrink) }
                className="btn-go-recipe"
              >
                Ir para Receita
              </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      <ButtonPageUp />
    </div>
  );
}

export default CarouselRecommendations;
