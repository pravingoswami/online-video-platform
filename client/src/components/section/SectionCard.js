import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import {Link} from 'react-router-dom'

function SectionCard(props) {
    return(
        <div>
                <MDBRow>
                {
                    props.sections.map(card => {
                        return(
                            <MDBCol><Link to = {`/${props.category._id}/${card._id}`} >                                    <br></br>
                               <MDBCard className="blue-gradient color-block-5  z-depth-1" style={{ width: "30rem" }}>
                                   <MDBCardImage className="img-fluid"  style={{ height: "350px" }}  src={`http://localhost:3011/${card.sectionImage}`} waves />
                                   <MDBCardBody >
                                    <MDBCardTitle style = {{color : "black"}} ><strong>{card.name.toUpperCase()}</strong></MDBCardTitle>
                                   </MDBCardBody>
                               </MDBCard>
                               </Link>

                               <br></br>
                               </MDBCol>
                        )
                    })
                }
                </MDBRow>

        </div>
    )
}

export default SectionCard