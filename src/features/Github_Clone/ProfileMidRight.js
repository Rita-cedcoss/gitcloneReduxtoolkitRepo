import React from 'react'
import { useSelector } from 'react-redux'
import ProfileMidRightOverView from './ProfileMidRightOverView'
import ProfileMidRightRepo from './ProfileMidRightRepo'
import ProjectComponent from './ProjectComponent'

const ProfileMidRight = () => {
  const state=useSelector(state=>state);
  return (
    <div id="midRightOuter">
      {(state.githubSliceReducer.count==0)?<ProfileMidRightOverView/>:<p></p>}
      {(state.githubSliceReducer.count==1)?<ProfileMidRightRepo/>:<p></p>}
      {(state.githubSliceReducer.count==2)?<ProjectComponent/>:<p></p>}
    </div>
  )
}

export default ProfileMidRight