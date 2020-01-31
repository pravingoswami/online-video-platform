import axios from 'axios'

export const setCategories = (categories) => {
    return {type : "SET_CATECORIES", payload : categories}
}

export const startGetCategories = () => {
    return (dispatch) => {
        axios.get('http://localhost:3011/categories')
            .then(response => {
                // console.log(response.data)
                dispatch(setCategories(response.data))
            })

            .catch(err => alert(err))
    }
}