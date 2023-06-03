const errors = {
    empty: 'el campo no puede estar vacio, campo obligatorio',
    choseOne: 'debe seleccionar al menos una dieta',
    score: 'el healt Score debe ser mayor a 0',
}


export const validations = ({ name, summary, healtScore, stepToStep, diets }) => {
    const error = {}

    if (name.length === 0) {
        error.name = errors.empty
    }
    if (summary.length === 0) {
        error.summary = errors.empty
    }
    if (stepToStep.length === 0) {
        error.stepToStep = errors.empty
    }
    if (diets.length <= 0) {
        error.chose = errors.choseOne
    }
    if (healtScore <= 0) {
        error.score = errors.score
    }
    return error
}