import React from 'react'
import { useSelector } from 'react-redux'

const ProfileMidRightRepo = () => {
    const state=useSelector(state=>state.githubSliceReducer.profileObj.repo)
    //users public repo
    return (
    <div id="outerProfileRepo">
        <div id="topRepo">
            <input type="text"/>
            <select>
                <option>Type</option>
            </select>
            <select>
                <option>Language</option>
            </select>
            <select>
                <option>Sort</option>
            </select>
            <button>New</button>
        </div>
        <div id="gridContainerRepo">
            
            {
                state.map((item)=>{
                    return(<>
                      <div id="gridRepo">
                <div id="gridRepoLeft">
                    <h1>{item.name}</h1><button>Public</button>
                </div>
                
            </div>
                    </>)
                })
            }
        
        </div>
    </div>
  )
}

export default ProfileMidRightRepo