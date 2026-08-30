import type { CategoryResponse } from '../types';

import { globalAxios } from '@/api/globalAxios';

export const getCategories = async (): Promise<CategoryResponse> => {
  const { data } = await globalAxios.get<CategoryResponse>('/getCategories');

  return data;
};
