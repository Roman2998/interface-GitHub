import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_USER_KEY = "lak"
const LS_REPO_KEY = "lrk"

interface GithubState {
    user : string,
    repo: string
}

const initialState: GithubState = {
    user: localStorage.getItem(LS_USER_KEY) ?? "",
    repo: localStorage.getItem(LS_REPO_KEY) ?? ""
}

export const githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<string>) {
            state.user = action.payload
            localStorage.setItem(LS_USER_KEY, state.user)
        },
        addRepo(state, action: PayloadAction<string>) {
            state.repo = action.payload
            localStorage.setItem(LS_REPO_KEY, state.repo)
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer