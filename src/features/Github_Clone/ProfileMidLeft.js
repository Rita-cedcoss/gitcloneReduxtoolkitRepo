import React from 'react'
import { useSelector } from 'react-redux'

const ProfileMidLeft = () => {
  const state=useSelector(state=>state.githubSliceReducer.profileObj)
  return (
    <div id="midLeftOuter">
      <div id="midLeftTop">
        <img alt="" height="100%" width="100%" src={state.avatar_url}/>
      </div>
      <div id="midLeftBottom">
      <h1>{state.login}</h1>
      <h3>{state.name}</h3>
      <button>Follow</button><br/>
      <span>{state.followers}-Follorers</span><span>{state.following}- Following</span><br/><br/>
      <i class='fas fa-map-marker-alt' style={{fontSize:"20px",color:"red"}}></i><span>{state.location}</span><br/>
      <i class="fa fa-envelope" style={{fontSize:"20px",color:"red"}}></i><span>{state.email}</span><br/>
      <i class="fa fa-paperclip" style={{fontSize:"20px",color:"red"}}></i><span>{state.html_url}</span><br/>
      <i class="fa fa-twitter" style={{fontSize:"20px",color:"red"}}></i><span>@{state.twitter_username}</span><br/>
      
      </div>
    </div>
  )
}

export default ProfileMidLeft