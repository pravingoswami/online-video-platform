import axios from 'axios'

export const setComments = (comments) => {
    return {type : "SET_COMMENTS", payload : comments}
}

export const startGetComments = () => {
    return (dispatch) => {
        axios.get('http://localhost:3011/comments')
            .then(response => {
                // console.log(response.data)
                dispatch(setComments(response.data))
            })

            .catch(err => alert(err))

    }
}