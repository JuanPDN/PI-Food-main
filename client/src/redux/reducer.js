import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE, RECIPE_BY_NAME } from "./action-types";

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

        case RECIPE_BY_NAME:
            return {
                ...state, recipes: payload
            }

        default:
            return { ...state }
    }

}
