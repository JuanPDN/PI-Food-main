import { ALL_RECIPES, CHANGE_PAGE } from "./action-types"


export const postRecipes = (data) => {
    return async (dispatch) => {
        try {
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
        type:CHANGE_PAGE,
        payload: value
    })
}
