import React from 'react'
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBAvatar,MDBBadge, MDBView, MDBMask, MDBIcon,MDBMedia   } from "mdbreact";
import ReactPlayer from 'react-player'
import { Container } from 'reactstrap';
import {connect} from 'react-redux'
import Comments from './Comments'

import { startChangeViews } from '../../actions/videosAction';


function VideoDesign(props){


    // const handleProgress = state => {
    //     let flag = false
    //     console.log('onProgress', state)
    //     if(state.playedSeconds > 3){
    //       flag = true
    //       console.log(flag)
    //     }
    //     console.log(flag)
        
    //     // if(flag){
    //     //   this.setState(({view : 1}), () => {
    //     //     const formData = {view : this.state.view}
    //     //     console.log('formData',formData)
    //     //     axios.put(`/videos/5e23f4f2d4c4edfaf45f4712`)
    //     //       .then(response => {
    //     //         console.log(response.data.view)
    //     //       })
    //     //   })
    //     // } 
        
    //     // We only want to update time slider if we are not currently seeking
    //     // if (!this.state.seeking) {
    //     //   this.setState(state)
    //     // }
    //   }
  
  
    //   const handleDuration = (duration) => {
    //     console.log('onDuration', duration)
    //     // this.setState({ duration })
    //   }
  
    //  const  handleProgressInterval = (interval) => {
    //     console.log('interval', interval)
    //   }
  
  
    //   const handleSeekChange = e => {
    //     this.setState({ played: parseFloat(e.target.value) })
    //   }
  
      const handleStart = () => {
          const formData = {"view" :props.video.view + 1}
          console.log(formData)

          props.dispatch(startChangeViews(props.video._id, formData))
          
          // axios.put(`/videos/${this.state.video._id}`, formData)
          //         .then(response => {
          //           console.log('view data',response.data.view)
          //         })
      }


    return (
        <div>
          
           {
             props.video && (<div>
              <div style = {{color : "black"}} >

              <ReactPlayer url={ props.video.videoURL} playing = {false} vimeo height = {'720px'} width = {'100%'} 
              // progressInterval = {handleProgressInterval}
              onStart={handleStart}
  
              // onSeek={e => console.log('onSeek', e)}
              // onProgress={handleProgress}
              // onDuration={handleDuration}
              />
              </div>
  
              <br></br>
  
                  <MDBCol lg="12"  >
                                        <a href="#!" className="success-text">
                                          <h6 className="font-weight-bold mb-3" >
                                            {props.video.view} &nbsp;&nbsp;
                                            <MDBIcon icon="eye" className="pr-2" />
                                            Views  &#x2022;  &nbsp;{props.video.ceatedAt.slice(0, 10)}
                                            
                                          </h6>
                              
                                        </a>
                                        <h3 className="font-weight-bold mb-3 p-0">
                                        <strong>{props.video.title}</strong>
                                        </h3>
                                        <p>
                                         {props.video.description}
                                        </p>
                                        <p>
                                        
                                        </p>
  
                                      </MDBCol>
                                      <br></br>
                                      <hr className="my-2" />
                                 

                                        <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}} >Comments</h1>     

                                        <hr className="my-2" />
                                        <br></br>
                                        <br></br>
                                        <Comments comments = {props.comments} />

                                      </div>
             )
           }

           
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const comments = []


props.video && props.video.comments.forEach(com => {
  console.log(com._id)
  const temp = state.comments.find(comment => comment._id == com._id)
  console.log(temp)
  temp && comments.push(temp)
})
    
    console.log(comments)
  return {
    comments : comments
  }
}

export default connect(mapStateToProps)(VideoDesign)
