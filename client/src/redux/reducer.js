import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE } from "./action-types";

const initialState = {
    recipes: [],
    allRecipes: [],
    currentPage: 1,
    diets: [],
    allDiets: [],
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_RECIPES:
            return {
                ...state, recipes: payload, allRecipes: payload
            }

        case CHANGE_PAGE:
            return {
                ...state, currentPage: state.currentPage + payload
            }

        case ALL_DIETS:
            return {
                ...state, diets: payload, allDiets: payload
            }

        default:
            return { ...state }
    }

}
