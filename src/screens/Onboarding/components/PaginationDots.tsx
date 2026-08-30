import { View } from 'react-native';
import styled from 'styled-components/native';

import { normalizeSize } from '@/theme';

type PaginationDotsProps = {
  activeIndex: number;
  count: number;
};

const DotsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Dot = styled(View)<{ active: boolean }>`
  ${({ active, theme: { colors } }) => ({
    width: active ? normalizeSize(10) : normalizeSize(6),
    height: active ? normalizeSize(10) : normalizeSize(6),
    borderRadius: active ? normalizeSize(10) / 2 : normalizeSize(6) / 2,
    backgroundColor: active ? colors.mainText : colors.grayOpacity,
  })}
`;

const PaginationDots = ({ activeIndex, count }: PaginationDotsProps) => {
  return (
    <DotsContainer>
      {Array.from({ length: count }, (_, index) => (
        <Dot active={index === activeIndex} key={index} />
      ))}
    </DotsContainer>
  );
};

export { PaginationDots };
