import axios from 'axios'

export const setSection = (section) => {
    return {type : "SET_SECTION", payload : section}
}

export const startGetSection = () => {
    return (dispatch) => {
        axios.get('http://localhost:3011/sections')
            .then(response => {
                // console.log(response.data)
                dispatch(setSection(response.data))
            })

            .catch(err => alert(err))

    }
}