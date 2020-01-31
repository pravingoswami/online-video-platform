import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom"
import { browserHistory } from '@version/react-router-v3'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container

} from 'reactstrap';

import BreadcrumbDesign from './components/BreadcrumbDesign'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import {connect} from 'react-redux'

import SectionList from './components/section/SectionList'
import subSectionList from './components/sub-section/SubSectionList'
import MultipleVideoList from './components/multiple-videos/MultipleVideoList'
import VideoShow from './components/video/VideoShow'




function App(props){

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <BrowserRouter>
      <Navbar color="dark" light expand="md">
        <NavbarBrand style = {{color : "white"}} ><Link to = "/"  style = {{textDecoration : "none", color : "white"}} ><strong>Video Platform</strong></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           {
            props.categories.map(category => {
              return (
                <NavItem>
                    <NavLink><Link to = {`/${category._id}`}  style = {{textDecoration : "none", color : "white"}} >{category.name.toUpperCase()}</Link></NavLink>
                </NavItem>
              )
            })
           }
          </Nav>
        </Collapse>
      </Navbar>
      <br></br>

      <Container>
     <BreadcrumbDesign/>
    </Container>

      <Route path = "/:category" component = {SectionList} exact = {true} />
      <Route path = "/:category/:section" component = {subSectionList} exact = {true} />
      <Route path = "/:category/:section/:subSection" component = {MultipleVideoList} exact = {true} />
      <Route path = "/:category/:section/:subSection/:video" component = {VideoShow} exact = {true} />
    </BrowserRouter>
    </div>
  )
}
const mapStateToProps= (state, props) => {
  // console.log('url',window.location.href)
  // const urls = browserHistory.getCurrentLocation().pathname.length > 5 && browserHistory.getCurrentLocation().pathname.split('/')
  // console.log('urls', urls)
  return {
    categories : state.categories,
    link : state.link
  }
}



export default connect(mapStateToProps)(App)