import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Meals from './page/Meals';
import Drinks from './page/Drinks';
import Register from './page/Register';
import Profile from './page/Profile';
import Favorites from './page/Favorites';
import DoneRecipes from './page/DoneRecipes';
import RecipeDetail from './page/RecipeDetail';
import RecipeInProgress from './page/RecipeInProgress';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/meals' element={<Meals />} />
      <Route path='/drinks' element={<Drinks />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/favorite' element={<Favorites />} />
      <Route path='/done-recipes' element={<DoneRecipes />} />
      <Route path='/recipe-detail' element={<RecipeDetail />} />
      <Route path='/recipe-in-progress' element={<RecipeInProgress />} />
    </Routes>
  );
}

export default App;
