import { useTheme } from 'styled-components/native';

import type { Category } from '../types';

import { CategoriesContentContainer, CategoriesInfoContainer } from './styles';

import { Image, Text } from '@/components';

const CategoriesCard = ({ category }: { category: Category }) => {
  const { normalizeSize, colors } = useTheme();

  return (
    <CategoriesContentContainer>
      <Image
        source={{ uri: category.image.url }}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: normalizeSize(12),
        }}
      />
      <CategoriesInfoContainer>
        <Text color={colors.black} variant="bodyMedium">
          {category.title}
        </Text>
      </CategoriesInfoContainer>
    </CategoriesContentContainer>
  );
};

export { CategoriesCard };
