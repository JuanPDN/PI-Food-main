import './App.css';
import Card from './components/cards/card';
import LandingPage from './components/landing/landingPage';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Details from './components/details/detail';

function App() {

  const [recipes, setRecipe] = useState([])

  const Recipes = async () => {
    try {
      const listRecipes = await axios.get('http://localhost:3001/recipes/1')
      setRecipe(listRecipes.data)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(() => {
    Recipes()
  },[])

  return (
    <div className="App">
      <h1>Henry Food</h1>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Card recipe= {recipes} />} />
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
