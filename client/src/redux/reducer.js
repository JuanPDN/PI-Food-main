import { ALL_DIETS, ALL_RECIPES, CHANGE_PAGE, FILTER_ORIGIN, FILTER_RECIPES, ORDER_BY_NAME, ORDER_BY_SCORE, RECIPE_BY_NAME } from "./action-types";

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
                ...state, recipes: payload, currentPage: 1
            }
        case FILTER_RECIPES:
            if (payload === 'all') {
                return {
                    ...state, recipes: state.allRecipes,
                    currentPage: 1
                }
            } else {
                return {
                    ...state, recipes: [...state.allRecipes.filter((recipe) => recipe.diets.includes(payload))],
                    currentPage: 1
                }
            }
        case FILTER_ORIGIN:
            if (payload === 'all') {
                return {
                    ...state, recipes: state.allRecipes
                }
            } else if (payload === 'db') {
                return {
                    ...state, recipes: [...state.recipes.filter((recipe) => typeof (recipe.id) !== 'number')],
                    currentPage: 1
                }
            } else {
                return {
                    ...state, recipes: [...state.allRecipes.filter((recipe) => typeof (recipe.id) === 'number')],
                    currentPage: 1
                }
            }
        case ORDER_BY_NAME:
            return {
                ...state, recipes: [...state.recipes.sort((a, b) => {
                    if (a.name > b.name) {
                        return payload ? 1 : -1
                    }
                    if (a.name < b.name) {
                        return payload === false ? 1 : -1
                    }
                    return 0
                })]
            }

        case ORDER_BY_SCORE:
            return {
                ...state, recipes: [...state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) {
                        return payload ? 1 : -1
                    }
                    if (a.healthScore < b.healthScore) {
                        return payload === false ? 1 : -1
                    }
                    return 0
                })]
            }

        default:
            return { ...state }
    }

}
