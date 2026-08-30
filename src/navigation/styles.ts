import styled from 'styled-components/native';

export const TabBarIconContainer = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderWidth: normalizeSize(4),
    borderColor: colors.whiteOpacity24,
    borderRadius: normalizeSize(32),
    height: normalizeSize(64),
    justifyContent: 'center',
    width: normalizeSize(64),
  })}
`;
