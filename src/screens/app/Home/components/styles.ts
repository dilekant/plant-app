import styled from 'styled-components/native';

export const QuestionsContentContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    width: normalizeSize(240),
    height: normalizeSize(164),
    borderRadius: normalizeSize(12),
    marginRight: normalizeSize(10),
  })}
`;

export const QuestionsInfoContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    position: 'absolute',
    bottom: normalizeSize(13),
    marginHorizontal: normalizeSize(14),
  })}
`;

export const CategoriesContentContainer = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    backgroundColor: colors.thirdBackground,
    width: normalizeSize(158),
    height: normalizeSize(152),
    borderRadius: normalizeSize(12),
    marginRight: normalizeSize(10),
    marginBottom: normalizeSize(16),
  })}
`;

export const CategoriesInfoContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    position: 'absolute',
    left: normalizeSize(16),
    right: normalizeSize(32),
    top: normalizeSize(16),
  })}
`;
