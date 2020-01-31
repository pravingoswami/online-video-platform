import axios from 'axios'

export const setSubSection = (subSection) => {
    return {type : "SET_SUBSECTION", payload : subSection}
}

export const startGetSubSection = () => {
    return (dispatch) => {
        axios.get('http://localhost:3011/sub-sections')
            .then(response => {
                // console.log(response.data)
                dispatch(setSubSection(response.data))
            })

            .catch(err => alert(err))

    }
}