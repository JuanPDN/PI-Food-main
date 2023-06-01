import { ALL_RECIPES } from "./action-types";

const initialState = {
    recipes : [],
    allRecipes: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_RECIPES:
            return {
                ...state, recipes: payload, allRecipes:payload
            } 
    
        default:
            return {...state}
    }

}
