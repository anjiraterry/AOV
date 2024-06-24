import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders ={
    'X-RapidAPI-Key': '992e161430mshd6be6f662150b77p1f90ddjsn026e4ab8f556',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'

}
const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com'


const createRequest =(url ) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest('/v1/coindesk')
        })
    })
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi;