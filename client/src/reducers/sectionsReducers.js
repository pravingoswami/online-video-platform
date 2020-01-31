const sectionsInitialState = []

const sectionsreducers = (state = sectionsInitialState, action) => {
    switch(action.type) {

        case 'SET_SECTION' : {
            return [...action.payload]
        }


        default : {
            return [...state] 
        }
    }
}

export default sectionsreducers