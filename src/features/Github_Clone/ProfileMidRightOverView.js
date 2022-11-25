import React from 'react'
import { useSelector } from 'react-redux'

const ProfileMidRightOverView = () => {
    const state=useSelector((state)=>state)
    console.log(state.githubSliceReducer.profileObj.repo.slice(0,6));
    return (
    <div id="overViewDivOuter">
        <h3>Public Repositories</h3>
        <div id="gridContainer">
          {(state.githubSliceReducer.profileObj.repo)?
          state.githubSliceReducer.profileObj.repo.slice(0,6).map((item)=>{
            return(
                <>
                <div className="gridBox"><p>{item.name}</p><button>Public</button></div>
                </>
            )
        }):<p>helo</p>
          
          }  
            {/* <div className="gridBox"></div>
            <div className="gridBox"></div>
            <div className="gridBox"></div>
            <div className="gridBox"></div>
            <div className="gridBox"></div>
            <div className="gridBox"></div> */}
            
        </div>
    </div>
  )
}

export default ProfileMidRightOverView