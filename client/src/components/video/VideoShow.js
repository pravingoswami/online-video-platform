import React from 'react'
import {connect} from 'react-redux'
import VideoDesign from './VideoDesign'
import Playlist from './Plyalist'
import { Container, Row, Col } from 'reactstrap'


function VideoShow(props) {
    return (
        <div>

            
<Container fluid={true}>
                <br></br>
              
                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}} >Watch a Video</h1>     

                
   
            <br></br>{console.log('video',props.video)}

            <Row>
                    <Col xs="2"></Col>
                    <Col xs="8">

                       <VideoDesign video = {props.video} />

                    </Col>
                    <Col xs="2" ><Playlist playListVideos = {props.playListVideos}  subSection = {props.match.params.subSection} category = {props.match.params.category} section = {props.match.params.section} /></Col>
                    </Row>

                    

            
            </Container>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const videos = state.videos.filter(video => video.subSection._id == props.match.params.subSection)
    console.log(videos)
    const video =  state.videos.find(video => video._id == props.match.params.video)
    const playListVideos = videos.filter(vid => vid._id != video._id)
    console.log(playListVideos)

    return {
        video : video,
        playListVideos : playListVideos
    }
}

export default connect(mapStateToProps)(VideoShow)