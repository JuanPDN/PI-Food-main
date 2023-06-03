import { diets } from "../data"
import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE, FILTER_ORIGIN, FILTER_RECIPES, ORDER_BY_NAME, RECIPE_BY_NAME } from "./action-types"
import axios from 'axios'



export const postRecipes = (data) => {
    return ({
        type: ALL_RECIPES,
        payload: data
    })
}

export const changePage = (value) => {
    return ({
        type: CHANGE_PAGE,
        payload: value
    })
}

export const getDiets = () => {
    return async (dispatch) => {
        try {
            //const { data } = await axios.get('http://localhost:3001/diet')
            return dispatch({
                type: ALL_DIETS,
                payload: diets //data
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const getRecipe = (nameRecipe) =>{
    return async(dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/recipes?nameRecipe=${nameRecipe}`)
            return dispatch({
                type: RECIPE_BY_NAME,
                payload: data
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const filterRecipes = (value) =>{
    return({
        type: FILTER_RECIPES,
        payload: value
    })
}

export const filterOrigin = (value) => {
    return({
        type: FILTER_ORIGIN,
        payload: value
    })
}

export const orderByName = (value) => {
    return({
        type: ORDER_BY_NAME,
        payload: value
    })
}