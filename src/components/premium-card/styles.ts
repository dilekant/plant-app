import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  ${({ theme: { normalizeSize, colors } }) => ({
    paddingHorizontal: normalizeSize(20),
    paddingVertical: normalizeSize(13),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalizeSize(12),
    backgroundColor: colors.secondaryBackground,
    flexDirection: 'row',
  })}
`;

export const LeftContainer = styled.View`
  ${() => ({
    flexDirection: 'row',
    alignItems: 'center',
  })}
`;

export const TextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    paddingLeft: normalizeSize(15),
  })}
`;
