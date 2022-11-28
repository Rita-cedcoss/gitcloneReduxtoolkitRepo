import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store";
import Footer from "./footer";
import { fetchData, showProfile} from "./githubSlice";
const SearchPanel = () => {
  const navigate=useNavigate();
  const stateData = useSelector((state) => state);
  const dispatch = useDispatch();
  // code for search profile of github
  const searchData = (e) => {
    e.preventDefault();
    let inpData = document.getElementById("searchInput").value;
    dispatch(fetchData(inpData));
    console.log(stateData.githubSliceReducer.githubArr);
  };
  //code for view user profile
  const viewProfile=(e)=>{
         let ind=e.target.getAttribute("ind")
         dispatch(showProfile(ind));
        
         navigate("/profile");
  }
  console.log(store.getState());
  return (
    <>
      <div id="outer">
        <h1>GitHub Profile Cards!</h1>
        <form onSubmit={searchData}>
          <input
            id="searchInput"
            type="text"
            placeholder="Search a github user "
            autoFocus
          />
        </form>
        {/* user profile searched data */}
        {stateData.githubSliceReducer.githubArr.map((item,i) => {
          return (
            <>
              <div id="userDetail" className="displayBlock">
                <div id="divLeft">
                  <img
                    alt=""
                    height="100%"
                    width="100%"
                    src={item.avatar_url}
                  />
                </div>
                <div id="divRight">
                  <div id="divRightTop">
                    <h3>
                      {item.login} <button id="viewProfile" detail={item} ind={i} onClick={viewProfile}>View Profile</button>
                    </h3>
                    <p>Learning to Learn</p>
                  </div>
                  <div id="divRightBottom">
                    <span>{item.followers} Followers</span>
                    <span>{item.following} Following</span>
                    <span>{item.public_repos} repos</span>
                    <br></br>
                    <button>Python Statistics</button>
                    <button>Whatsapp Analysis</button>
                    <button>Blog Post</button>
                    <button>Cpp-Projects</button>
                    <button>Ml Models</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default SearchPanel;
