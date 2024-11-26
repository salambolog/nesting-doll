// require('dotenv').config();
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-key': '3dc4bee213msh27d5251011d8df2p1564bcjsn636919500144',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com/'    
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '3dc4bee213msh27d5251011d8df2p1564bcjsn636919500144')
          headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com/',)
        //   headers.set('X-RapidAPI-Key', process.env.REACT_APP_CRYPTO_KEY)
        //   headers.set('X-RapidAPI-Host', process.env.REACT_APP_CRYPTO_HOST,)
          return headers
        }
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;