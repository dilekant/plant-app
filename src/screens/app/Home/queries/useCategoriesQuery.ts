import { useQuery } from '@tanstack/react-query';

import { getCategories } from '../actions/getCategories';
import type { CategoryResponse } from '../types';

export const useCategoriesQuery = () =>
  useQuery<CategoryResponse>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
