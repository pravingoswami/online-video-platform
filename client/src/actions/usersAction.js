import axios from 'axios'

export const setUser = (users) => {
    return {type : "SET_USERS", payload : users}
}

export const startGetUser = () => {
    return (dispatch) => {
        axios.get('http://localhost:3011/users')
            .then(response => {
                // console.log(response.data)
                dispatch(setUser(response.data))
            })

            .catch(err => alert(err))

    }
}