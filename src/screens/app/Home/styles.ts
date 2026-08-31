import styled from 'styled-components/native';

export const HeaderContainer = styled.View<{ insetTop: number }>`
  ${({ insetTop, theme: { normalizeSize } }) => ({
    paddingHorizontal: normalizeSize(20),
    paddingVertical: insetTop,
    paddingBottom: normalizeSize(14),
    height: normalizeSize(175),
  })}
`;

export const TextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    paddingBottom: normalizeSize(14),
  })}
`;

export const ContentContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    marginVertical: normalizeSize(24),
  })}
`;

export const CardContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    paddingHorizontal: normalizeSize(24),
  })}
`;
