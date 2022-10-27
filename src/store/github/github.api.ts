import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICommit, IRepo, IUser, ServerResponse} from "../../models/model";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response:ServerResponse) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username: string) => ({
                url : `users/${username}/repos`,
                params: {
                    per_page: 100
                }
            })
        }),
        getUserRepoCommits: build.query<ICommit[], string[]>({
            query: ([username, repo]) => ({
                url : `repos/${username}/${repo}/commits`,
                params: {
                    per_page: 100
                }
            })
        })
    })
})

export const {useSearchUsersQuery, useGetUserReposQuery, useGetUserRepoCommitsQuery} = githubApi