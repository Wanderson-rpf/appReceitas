import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Meals from './page/Meals';
import Drinks from './page/Drinks';
import Profile from './page/Profile';
import Register from './page/Register';
import Favorites from './page/Favorites';
import DoneRecipes from './page/DoneRecipes';
import RecipeDetail from './page/RecipeDetail';
import RecipeInProgress from './page/RecipeInProgress';
import RecipeInProgressList from './page/RecipeInProgressList';


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
      <Route path='/meals/:id' element={<RecipeDetail />} />
      <Route path='/drinks/:id' element={<RecipeDetail />} />
      <Route path='/recipes-in-progress' element={<RecipeInProgressList />} />
      <Route path='/meals/:id/in-progress' element={<RecipeInProgress />} />
      <Route path='/drinks/:id/in-progress' element={<RecipeInProgress />} />
    </Routes>
  );
}

export default App;
