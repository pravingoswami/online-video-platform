import React from 'react'
import {connect} from 'react-redux'
import SectionCard from './SectionCard'
import {Container  } from 'reactstrap';
// import { browserHistory } from '@version/react-router-v3'
import { setLink } from '../../actions/linkActions';




class SectionList extends React.Component{

    componentDidMount = () => {
        console.log(this.props.category)
        this.props.dispatch(setLink({category : this.props.category}))

    }
    
    render(){
        return (
            <div>
              
                <Container>
                    <br></br>
                    <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}} >{this.props.category && this.props.category.name.toUpperCase()}</h1>     
                <br></br>
                <SectionCard sections = {this.props.sections} category = {this.props.category} />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const category = state.categories.find(cat => cat._id == props.match.params.category)

    return {
        category : category,
        link : state.link,
        sections : state.sections.filter(section => section.category._id == props.match.params.category)
    }
}

export default connect(mapStateToProps)(SectionList)