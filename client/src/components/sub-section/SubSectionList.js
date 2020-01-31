import React from 'react'
import {connect} from 'react-redux'
import SubSectionCard from './SubSectionCard'
import {Container  } from 'reactstrap';

function SubSectionList(props) {
    return (
        <div>{console.log(props.link)}

            
            <Container>
                <br></br>
                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}} >{props.section && props.section.name.toUpperCase()}</h1>     
   
            <br></br>{console.log(props.subSections)}

            
            <SubSectionCard subSections = {props.subSections} category = {props.match.params.category} section = {props.match.params.section} />
            </Container>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        link : state.link,
        section : state.sections.find(sec => sec._id == props.match.params.section),
        subSections : state.subSections.filter(sub => sub.section._id == props.match.params.section)
    }
}

export default connect(mapStateToProps)(SubSectionList)