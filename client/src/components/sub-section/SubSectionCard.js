import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import {Link} from 'react-router-dom'

function SubSectionCard(props) {
    return(
        <div>
                
                <MDBRow>


                {
                    props.subSections.map(card => {
                        {console.log(card)}
                        return(
                            <div>
                            <MDBCol><Link to = {`/${props.category}/${props.section}/${card._id}`} >                                    <br></br>
                               <MDBCard className="blue-gradient color-block-5  z-depth-1" style={{ width: "20rem" }}>
                                   <MDBCardImage className="img-fluid"  style={{ height: "250px", width : "100%" }}  src={`http://localhost:3011/${card.subSectionImage}`} waves />
                                   <MDBCardBody>
                                    <MDBCardTitle style = {{color : "black"}} ><strong>{card.name.toUpperCase()}</strong></MDBCardTitle>
                                   </MDBCardBody>
                               </MDBCard>
                               </Link>

                               </MDBCol>
                               <br></br>
                            </div>
                        )
                    })
                }
                </MDBRow>

        </div>
    )
}


export default SubSectionCard