import React from 'react'
import {connect} from 'react-redux'
import {Container  } from 'reactstrap';

import MultipleVideoDesign from './MultipleVideoDesign'

function SubSectionList(props) {
    return (
        <div>

            
            <Container>
                <br></br>
                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}} >{props.subSection && props.subSection.name.toUpperCase()}</h1>     
   
            {/* <br></br>{console.log(props.subSection)} */}

            
            <MultipleVideoDesign  videos = {props.videos} subSection = {props.match.params.subSection} category = {props.match.params.category} section = {props.match.params.section} />
            </Container>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        subSection : state.subSections.find(sub => sub._id == props.match.params.subSection),
        videos : state.videos.filter(video => video.subSection._id == props.match.params.subSection)
    }
}

export default connect(mapStateToProps)(SubSectionList)