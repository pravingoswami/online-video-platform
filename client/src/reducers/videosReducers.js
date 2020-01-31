const videosInitialState = []

const videosReducers = (state = videosInitialState , action) => {
    switch(action.type) {

        case 'SET_VIDEO' : {
            return [...action.payload]
        }

        case "EDIT_VIDEO_COUNT" : {
            return state.map(video => {
                if(video._id == action.payload._id) {
                    console.log('v reducer', action.payload)
                    return {...video, ...action.payload} 
                } else {
                    return {...video}
                }
            })
        }


        default : {
            return [...state]
        }
    }
}

export default videosReducers