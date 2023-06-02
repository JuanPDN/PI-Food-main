import { ALL_RECIPES, CHANGE_PAGE } from "./action-types";

const initialState = {
    recipes: [],
    allRecipes: [],
    currentPage: 1
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

        default:
            return { ...state }
    }

}
