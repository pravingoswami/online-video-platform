const categoriesInitialState = []

const categoriesReducers = (state = categoriesInitialState, action) => {
    switch(action.type){

        case 'SET_CATECORIES' : {
            return [...action.payload]
        }

        default : {
            return [...state]
        }
    }
}

export default categoriesReducers