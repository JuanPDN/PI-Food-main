//import { diets, data } from "../data"
import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE, FILTER_ORIGIN, FILTER_RECIPES, ORDER_BY_NAME, ORDER_BY_SCORE, RECIPE_BY_NAME } from "./action-types"
import axios from 'axios'



export const getRecipes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/recipes')
            return dispatch({
                type: ALL_RECIPES,
                payload: data
            })
        } catch (error) {
            throw new Error(error)
        }
    }
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
            const { data } = await axios.get('/diet')
            return dispatch({
                type: ALL_DIETS,
                payload: data //diets 
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const getRecipeByName = (nameRecipe) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/recipes?nameRecipe=${nameRecipe}`)
            return dispatch({
                type: RECIPE_BY_NAME,
                payload: data
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const filterRecipes = (value) => {
    return ({
        type: FILTER_RECIPES,
        payload: value
    })
}

export const filterOrigin = (value) => {
    return ({
        type: FILTER_ORIGIN,
        payload: value
    })
}

export const orderByName = (value) => {
    return ({
        type: ORDER_BY_NAME,
        payload: value
    })
}

export const orderByScore = (value) => {
    return ({
        type: ORDER_BY_SCORE,
        payload: value
    })
}