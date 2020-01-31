import React from 'react'
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBAvatar,MDBBadge, MDBView, MDBMask, MDBIcon,MDBMedia   } from "mdbreact";

function Comments(props){
    return(
        <div>

            {
                props.comments.map(comment => {
                    return(
                        <div>
                              <MDBMedia>
                                <MDBMedia left className="mr-3">
                                    <MDBMedia object src = {`http://localhost:3011/${comment.commentBy.profile}`}  style = {{borderRadius : "50%", height : "80px", width : "80px"}} />
                                </MDBMedia>
                                <MDBMedia body>
                                    <MDBMedia heading>
                                    <h4 className="font-weight-bold mb-3">{comment.commentBy.name}</h4>
                                    <h6 className="font-weight-bold grey-text mb-3">
                                    {comment.title}
                                        </h6>
                                    </MDBMedia>
                                    <p className="grey-text">
                                    {comment.body}
                                        </p>

                            {
                                comment.reply && comment.reply.map(reply => {
                                    return (
                                        <MDBMedia className="mt-3">
                                        <MDBMedia left href="#" className="pr-3">
                                        <MDBMedia object src = {`http://localhost:3011/${comment.commentBy.profile}`}  style = {{borderRadius : "50%", height : "80px", width : "80px"}} />
                                        </MDBMedia>
                                        <MDBMedia body>
                                          <MDBMedia heading>
                                          <h4 className="font-weight-bold mb-3">{comment.commentBy.name}</h4>
                                      <h6 className="font-weight-bold grey-text mb-3">
                                      {comment.title}
                                            </h6>
                                          </MDBMedia>
                                          <p className="grey-text">
                                          {comment.body}
                                            </p>
                                        </MDBMedia>
                                      </MDBMedia>
                                    )
                                })
                            }

                            
                 </MDBMedia>
             </MDBMedia>
                                 
               
                        <br></br>
                        <hr className="my-2" />
                        <br></br>

                        </div>
                    )
                })
            }
{/*            
               <MDBMedia>
               <MDBMedia left className="mr-3">
                 <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder4.jpg" alt="Generic placeholder image" style = {{borderRadius : "50%"}} />
               </MDBMedia>
               <MDBMedia body>
                 <MDBMedia heading>
                 <h4 className="font-weight-bold mb-3">Maria Kate</h4>
                 <h6 className="font-weight-bold grey-text mb-3">
                         Photographer
                       </h6>
                 </MDBMedia>
                 <p className="grey-text">
                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                       </p>




                 <MDBMedia className="mt-3">
                   <MDBMedia left href="#" className="pr-3">
                     <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder4.jpg" alt="Generic placeholder image" style = {{borderRadius : "50%"}}  />
                   </MDBMedia>
                   <MDBMedia body>
                     <MDBMedia heading>
                     <h4 className="font-weight-bold mb-3">Maria Kate</h4>
                 <h6 className="font-weight-bold grey-text mb-3">
                         Photographer
                       </h6>
                     </MDBMedia>
                     <p className="grey-text">
                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                       </p>
                   </MDBMedia>
                 </MDBMedia>




               </MDBMedia>
             </MDBMedia> */}
           
        </div>
    )
}

export default Comments