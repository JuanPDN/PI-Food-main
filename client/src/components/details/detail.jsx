import style from './detail.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import { detail } from '../../data';


function Details() {

    const [recipe, setRecipe] = useState([])
    const { id } = useParams()

    const Recipes = async (id) => {
        try {
            const {data} = await axios.get(`/recipes/${id}`)
            setRecipe(data)
            //setRecipe(detail)
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        Recipes(id)
    }, [id])

    const { name, image, summary, healthScore, stepToStep, diets } = recipe

    return (
        <div className={style['bg-detail']} key={id}>
            <Link to='/home'>
            <button className={style['btn-back']}>Back</button>
            </Link>
            <p>ID: {id}</p>
            <h2>{name}</h2>
            <p> health Score: {healthScore}</p>
            <img src={image} alt="" />
            <p dangerouslySetInnerHTML={{ __html: summary }}></p>
            {
                stepToStep?.map((steps) => {
                    return (
                        <div>
                            <h3>Step: {steps.number}</h3>
                            <p>{steps.step}</p>
                        </div>
                    )
                })
            }
            <ul>
                {diets?.map((diet, index) =>
                    <li key={index}>{diet}</li>
                )}
            </ul>
        </div>);
}


export default Details;