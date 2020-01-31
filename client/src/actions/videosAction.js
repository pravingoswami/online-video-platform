import axios from 'axios'

export const setVideo = (videos) => {
    return {type : "SET_VIDEO", payload : videos}
}

export const startGetVideos = () => {
    return (dispatch) => {
        axios.get('http://localhost:3011/videos')
            .then(response => {
                // console.log(response.data)
                dispatch(setVideo(response.data))
            })

            .catch(err => alert(err))

    }
}

// export const changeViews = (video)

export const editVideoCount = (video) => {
    console.log('edit view count', video)
    return { 
        type: "EDIT_VIDEO_COUNT", 
        payload: video 
    }
}

export const startChangeViews = (videoId, fromData) => {
    return (dispatch) => {
        axios.put(`http://localhost:3011/videos/${videoId}`, fromData)
            .then(response => {
                // console.log(response.data)
                // startGetVideos()

                dispatch(editVideoCount(response.data))
            })

            .catch(err => alert(err))
    }
}