import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ServerResponse, IUser } from '../../models/models'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        // any - the type of data we receive
        // string - the type of parametr which we pass for request
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search, 
                    per_page: 10
                }
            }), 
            transformResponse: (response: ServerResponse<IUser>) => response.items
        })
    }) 
})

export const {useSearchUsersQuery} = githubApi