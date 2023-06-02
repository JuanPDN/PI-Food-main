import { diets } from "../data"
import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE } from "./action-types"
//import axios from 'axios'



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
