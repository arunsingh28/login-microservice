import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IEmailVerify {
    "email": string
}


export const emailApi = createApi({
    reducerPath: 'email',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:80/'
    }),
    endpoints: (builder) => ({
        verifyEmail: builder.query<IEmailVerify, void>({
            query: () => '/email-verify'
        }),
    })
})


export const { useVerifyEmailQuery } = emailApi