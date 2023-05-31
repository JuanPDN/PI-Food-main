import './App.css';
import LandingPage from './components/landing/landingPage';
import { Route, Routes, useLocation } from 'react-router-dom';
//import axios from 'axios'
import { useEffect, useState } from 'react';
import Details from './components/details/detail';
import Cards from './components/cards/cards';
import data from './data';
import NavBar from './components/navBar/navBar';

function App() {

  const [recipes, setRecipe] = useState([])

  const Recipes = async () => {
    try {
      //const listRecipes = await axios.get('http://localhost:3001/recipes')
      //setRecipe(listRecipes.data)
      setRecipe(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    Recipes()
  }, [])

  const { pathname } = useLocation()

  return (
    <div className="App">
      <h1>Henry Food</h1>
      {pathname !== '/' ? <NavBar /> : null}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Cards recipe={recipes} />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
