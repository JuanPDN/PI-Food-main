import { ALL_RECIPES } from "./action-types"


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