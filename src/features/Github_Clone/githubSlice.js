import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import { act } from "react-dom/test-utils";

const initialState={
    githubArr:[],
    status:"",
    profileObj:{},
    count:0
}
//code for data fetch when user searched
export const fetchData=createAsyncThunk('githubclone/fetchData',
async (inpData)=>{
    const response=await axios.get("https://api.github.com/users/"+inpData);
    const repoResponse=await axios.get("https://api.github.com/users/"+inpData+"/repos");
    console.log(repoResponse.data);
    console.log(response.data);
    response.data.repo=repoResponse.data;
    return response.data
})

export const githubSlice=createSlice({
    name:"githubclone",initialState,
    reducers:{
      showProfile:(state,action)=>{
        state.profileObj=state.githubArr[action.payload];
      },
      over:(state,action)=>{
        state.count=0;
      },
      repo:(state,action)=>{
        state.count=1;
      },
      project:(state,action)=>{
        state.count=2;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending,(state,action)=>{
            state.status="helo"
          })
          .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="data fetch"
            state.githubArr=[];
            state.githubArr.push(action.payload);
          })
          .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed"
          })
      }
})
export const {showProfile ,over,repo,project}=githubSlice.actions;
export default githubSlice.reducer;