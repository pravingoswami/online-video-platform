import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'

function Playlist(props) {
    return(
        <div>
            <h2 className="font-weight-bold mb-3 p-0" style = {{textAlign : "center"}} >
                                        <strong>Playlist</strong>
                                        </h2>
                                        <br></br>
           
                {
                    props.playListVideos.map(video => {
                        return(
                            <div>
                                
                               
                                <Link to =  {`/${props.category}/${props.section}/${props.subSection}/${video._id}`}  >
                                <MDBCard cascade>
                            <MDBCardImage cascade className="img-fluid" src={`http://localhost:3011/${video.thumbnail}`} />
                            <MDBCardBody cascade>
                  
                            <MDBCardText>{video.title.toUpperCase()}</MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                            </Link>
                            <br></br>
                            </div>
                        )
                    })
                }
                
        </div>
    )
}

export default Playlist
