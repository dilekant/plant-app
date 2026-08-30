import { BASE_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Question } from '../types';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], void>({
      query: () => '/getQuestions',
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
