const subSectionsInitialState = []

const seubSectionsReducers = (state = subSectionsInitialState , action) => {
    switch (action.type) {

        case 'SET_SUBSECTION' : {
            return [...action.payload]
        }


        default : {
            return [...state]
        }
    }
}

export default seubSectionsReducers