import './App.css';
import LandingPage from './components/landing/landingPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Details from './components/details/detail';
import Cards from './components/cards/cards';
import NavBar from './components/navBar/navBar';
import { getDiets, getRecipes } from './redux/actions';
import Form from './components/form/form';

function App() {

  const recipes = useSelector((state) => state.recipes)
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)


  const handleClick = () => {
    setShowForm(!showForm)
  }

  const postRecipe = async ({ name, image, summary, healthScore, stepToStep, diets }) => {
    try {
      await axios.post('http://localhost:3001/recipes', { name, image, summary, healthScore, stepToStep:[stepToStep], diets })
      window.alert('Recipe created successfully')
    } catch (error) {
      console.error(error.message);
      window.alert('Failed to create recipe');
    }
  }

  useEffect(() => {
    dispatch(getRecipes())
    dispatch(getDiets())
  }, [dispatch])

  const { pathname } = useLocation()

  return (
    <div className="App">
      {showForm ? <Form handleClick={handleClick} postRecipe={postRecipe} /> : null}
      {pathname !== '/' ? <NavBar handleClick={handleClick} /> : null}
      {pathname !== '/' ? <h1>Henry Food</h1> : null}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Cards recipe={recipes} />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
