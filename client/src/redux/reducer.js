import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE, FILTER_ORIGIN, FILTER_RECIPES, RECIPE_BY_NAME } from "./action-types";

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
        case FILTER_RECIPES:
            if (payload === 'all') {
                return {
                    ...state, recipes: state.allRecipes
                }
            } else {
                return {
                    ...state, recipes: [...state.allRecipes.filter((recipe) => recipe.diets.includes(payload))]
                }
            }
        case FILTER_ORIGIN:
            if (payload === 'all') {
                return {
                    ...state, recipes: state.allRecipes
                }
            } else if (payload === 'db') {
                return {
                    ...state, recipes: [...state.recipes.filter((recipe) => typeof (recipe.id) !== 'number')]
                }
            } else {
                return {
                    ...state, recipes: [...state.recipes.filter((recipe) => typeof (recipe.id) === 'number')]
                }
            }

        default:
            return { ...state }
    }

}
