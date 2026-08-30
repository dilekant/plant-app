import { useTheme } from 'styled-components/native';

import { Text } from '../text';

import { CardContainer, LeftContainer, TextContainer } from './styles';

import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import MessageIcon from '@/assets/icons/message.svg';

const PremiumCard = () => {
  const { colors, normalizeSize } = useTheme();
  return (
    <CardContainer activeOpacity={0.7}>
      <LeftContainer>
        <MessageIcon height={normalizeSize(30)} width={normalizeSize(36)} />
        <TextContainer>
          <Text color={colors.yellow} variant="bodyBoldMedium">
            FREE Premium Available
          </Text>
          <Text color={colors.yellow} variant="bodySmall">
            Tap to upgrade your account!
          </Text>
        </TextContainer>
      </LeftContainer>
      <ArrowRightIcon height={normalizeSize(24)} width={normalizeSize(24)} />
    </CardContainer>
  );
};
export { PremiumCard };
