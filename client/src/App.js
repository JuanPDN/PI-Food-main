import './App.css';
import LandingPage from './components/landing/landingPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Details from './components/details/detail';
import Cards from './components/cards/cards';
import { data } from './data';
import NavBar from './components/navBar/navBar';
import { getDiets, postRecipes } from './redux/actions';
import Form from './components/form/form';

function App() {

  const recipes = useSelector((state) => state.recipes)
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)


  const handleClick = () => {
    setShowForm(!showForm)
  }

  const postRecipe = async ({ name, image, summary, healthScore, stepToStep, diet }) => {
    try {
      await axios.post('http://localhost:3001/recipes', { name, image, summary, healthScore, stepToStep:[stepToStep], diet })
      window.alert('Recipe created successfully')
    } catch (error) {
      console.error(error.message);
      window.alert('Failed to create recipe');
    }
  }

  useEffect(() => {
    const Recipes = async () => {
      try {
        //const {data} = await axios.get('http://localhost:3001/recipes')
        dispatch(postRecipes(data))

      } catch (error) {
        throw new Error(error)
      }
    }
    dispatch(getDiets())
    Recipes()
  }, [dispatch])

  const { pathname } = useLocation()

  return (
    <div className="App">
      <h1>Henry Food</h1>
      {showForm ? <Form handleClick={handleClick} postRecipe={postRecipe} /> : null}
      {pathname !== '/' ? <NavBar handleClick={handleClick} /> : null}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Cards recipe={recipes} />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
