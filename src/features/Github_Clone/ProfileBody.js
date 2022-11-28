import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { over, project, repo, showProfile } from "./githubSlice";
import ProfileMidLeft from "./ProfileMidLeft";
import ProfileMidRight from "./ProfileMidRight";

const ProfileBody = () => {
  const state = useSelector((state) => state);
  console.log(state.githubSliceReducer.profileObj.public_repos);
  const dispatch = useDispatch();
  //data display on button click
  const overviewHandler = () => {
    dispatch(over());
  };
  const repoHandler = () => {
    dispatch(repo());
  };
  const projectHandler = () => {
    dispatch(project());
  };
  return (
    <div id="mainDivBody">
      <div id="mainDivTop">
        <div id="leftMaindivTop"></div>
        <div id="RightMaindivTop">
          <i
            class="fa fa-book"
            style={{ fontSize: "20px", color: "black" }}
          ></i>
          <span onClick={overviewHandler}>Overview </span>
          <i
            class="fas fa-id-badge"
            style={{ fontSize: "20px", color: "black" }}
          ></i>
          <span onClick={repoHandler}>
            Repositories({state.githubSliceReducer.profileObj.public_repos})
          </span>
          <i
            class="fas fa-user-circle"
            style={{ fontSize: "20px", color: "black" }}
          ></i>
          <span onClick={projectHandler}>Project</span>
        </div>
      </div>
      <div id="mainMiddle">
        <ProfileMidLeft />
        <ProfileMidRight />
      </div>
    </div>
  );
};

export default ProfileBody;
