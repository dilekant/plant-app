import styled from 'styled-components/native';

export const FooterTextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    marginTop: normalizeSize(8),
    alignItems: 'center',
    gap: normalizeSize(10),
  })}
`;
