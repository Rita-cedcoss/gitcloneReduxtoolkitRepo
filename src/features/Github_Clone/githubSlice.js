import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    githubArr:[],
    status:"",
    profileObj:{}
}
export const userDataFetch=createAsyncThunk("githubclone/userDataFetch",
async ()=>{
    const response=await axios.get("https://api.github.com/users");
    console.log(response.data);
    return response.data
})
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
        // console.log(state.githubArr); 
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(userDataFetch.pending,(state,action)=>{
            state.status="helo"
          })
          .addCase(userDataFetch.fulfilled,(state,action)=>{
            state.status="data fetch"
            state.githubArr=action.payload
          })
          .addCase(userDataFetch.rejected,(state,action)=>{
            state.status="failed"
          })
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
export const {showProfile}=githubSlice.actions;
export default githubSlice.reducer;