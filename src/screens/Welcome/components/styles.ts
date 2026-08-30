import styled from 'styled-components/native';

export const HeaderTextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    paddingHorizontal: normalizeSize(24),
    marginBottom: normalizeSize(24),
    gap: normalizeSize(8),
  })}
`;

export const FooterTextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    marginTop: normalizeSize(17),
    paddingHorizontal: normalizeSize(36),
  })}
`;
