import React from 'react'
import { useSelector } from 'react-redux'
import ProfileMidLeft from './ProfileMidLeft';
import ProfileMidRight from './ProfileMidRight';

const ProfileBody = () => {
     const state=useSelector((state)=>state)
     console.log(state.githubSliceReducer.profileObj.public_repos);
    return (
    <div id="mainDivBody">
        <div id="mainDivTop">
            <div id="leftMaindivTop"></div>
            <div  id="RightMaindivTop">
            <i class="fa fa-book" style={{fontSize:"20px",color:"black"}}></i><span>Overview </span>
            <i class='fas fa-id-badge' style={{fontSize:"20px",color:"black"}}></i><span>Repositories({state.githubSliceReducer.profileObj.public_repos})</span>
            <i class='fas fa-user-circle' style={{fontSize:"20px",color:"black"}}></i> <span>Project</span>
            </div>
        </div>
        <div id="mainMiddle">
            <ProfileMidLeft/>
            <ProfileMidRight/>
        </div>
    </div>
  )
}

export default ProfileBody