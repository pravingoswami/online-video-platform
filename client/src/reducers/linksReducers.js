const linkInitialState = []

const linksReducers = (state = linkInitialState, action) => {
    switch(action.type) {

        case "SET_LINK" : {
            console.log('payload',action.payload)
            return [...state,action.payload]
        }
        
        default : {
            return [...state]
        }
    }
}

export default linksReducers