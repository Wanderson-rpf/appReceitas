import { configureStore } from "@reduxjs/toolkit";
import { drinksReducer } from "../feature/drinks/drinksSlice";
import { loginReducer } from "../feature/login/loginSlice";
import { mealsReducer } from "../feature/meals/mealsSlice";
import { userReducer } from "../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    meals: mealsReducer,
    drinks: drinksReducer,
  },
})
