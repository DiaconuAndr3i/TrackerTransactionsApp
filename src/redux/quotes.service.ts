import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuote } from "../utils/types/IQuote";

export const quotesSlice = createApi({
    reducerPath: "quote",
    baseQuery: fetchBaseQuery({baseUrl: 'https://zenquotes.io/api'}),
    endpoints: (builder) => ({
        getQuote: builder.query<IQuote[], undefined>({
            query: () => "/random",
        }),
    }),
})



export const {useGetQuoteQuery} = quotesSlice;