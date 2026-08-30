import styled from 'styled-components/native';

import { FONT_FAMILY } from '@/assets';

export const InputContainer = styled.View`
  ${({ theme: { colors, normalizeSize } }) => ({
    alignItems: 'center',
    backgroundColor: colors.whiteOpacity88,
    borderRadius: normalizeSize(12),
    flexDirection: 'row',
    gap: normalizeSize(12),
    paddingHorizontal: normalizeSize(16),
    paddingVertical: normalizeSize(13),
  })}
`;

export const Input = styled.TextInput.attrs(({ theme: { colors } }) => ({
  placeholderTextColor: colors.inactive,
}))`
  ${({ theme: { colors, normalizeSize } }) => ({
    color: colors.primaryText,
    flex: 1,
    fontFamily: FONT_FAMILY.rubik,
    fontSize: normalizeSize(16),
    padding: 0,
  })}
`;
