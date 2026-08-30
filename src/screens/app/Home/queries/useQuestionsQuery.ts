import { useQuery } from '@tanstack/react-query';

import { getQuestions } from '../actions/getQuestions';
import type { Question } from '../types';

export const useQuestionsQuery = () =>
  useQuery<Question[]>({
    queryKey: ['questions'],
    queryFn: getQuestions,
  });
