import { useTheme } from 'styled-components/native';

import { HeaderTextContainer } from './styles';

import { Text } from '@/components';

const Header = () => {
  const { colors } = useTheme();

  return (
    <HeaderTextContainer>
      <Text variant={'heading'}>
        Welcome to <Text variant={'display'}>PlantApp</Text>
      </Text>
      <Text color={colors.primaryOpacity} variant={'bodyLarge'}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
    </HeaderTextContainer>
  );
};

export default Header;
