import type { Question } from '../types';

import { globalAxios } from '@/api/globalAxios';

export const getQuestions = async (): Promise<Question[]> => {
  const { data } = await globalAxios.get('/getQuestions');

  return data;
};
