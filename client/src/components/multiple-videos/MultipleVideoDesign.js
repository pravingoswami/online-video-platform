import React from 'react'
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBListGroup, MDBListGroupItem, MDBContainer,MDBBadge, MDBView, MDBMask, MDBIcon  } from "mdbreact";
import {Link} from 'react-router-dom'



function MultipleVideoDesign(props) {
    return(
        <div>
                    {
                        props.videos.map(video => {
                            // console.log(video)
                            return(
                                <div>
                                    {/* <MDBRow style = {{ margin :"0px", padding : "0px", borderRadius : "5px"}} > */}
                                    <MDBRow style = {{color : "black"}}>
                                <MDBCol lg="5"  style = {{ margin :"0px", padding : "0px", width : "100%"}}  >
                                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4"hover waves  >
                                    <img
                                      className="img-fluid"
                                      src={`http://localhost:3011/${video.thumbnail}`}
                                      alt=""
                                    />
                                    <a href="#!">
                                      <MDBMask overlay="white-slight" />
                                    </a>
                                  </MDBView>
                                </MDBCol>
                                {/* <MDBCol lg="7" style = {{ margin :"0px", padding : "20px"}}  > */}
                                <MDBCol lg="7"  >
                                  <a href="#!" className="green-text">
                                    <h6 className="font-weight-bold mb-3" >
                                      <MDBIcon icon="video" className="pr-2" />
                                      Video
                                    </h6>
                                  </a>
                                  <h3 className="font-weight-bold mb-3 p-0">
                                  <strong>{video.title.toUpperCase()}</strong>
                                  </h3>
                                  <p>
                                   {video.description}
                                  </p>
                                  <p>
                                    {/* by
                                    <a href="#!">
                                      <strong>Carine Fox</strong>
                                    </a>
                                    , 19/08/2018 */}
                                    
                                    <strong>{video.ceatedAt.slice(0, 10)}</strong>
                                  </p>

                                  <Link to =  {`/${props.category}/${props.section}/${props.subSection}/${video._id}`} style = {{textDecoration : "none", color : "black"}}  >
                                  <MDBBtn color="success" size="md" className="waves-light " style = {{color : "black"}} >
                                  <strong> Watch Video</strong>
                                  </MDBBtn>
                                  </Link>
                                </MDBCol>
                              </MDBRow>
                              <br></br>
                              <br></br>
                                </div>
                            )
                        })
                    }



        </div>
    )
}

export default MultipleVideoDesign