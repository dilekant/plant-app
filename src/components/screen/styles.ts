import styled from 'styled-components/native';

export const ScreenContainer = styled.View<{ insetTop: number; insetBottom: number }>`
  ${({ theme: { normalizeSize, colors }, insetTop, insetBottom }) => ({
    flex: 1,
    paddingTop: insetTop,
    paddingHorizontal: normalizeSize(24),
    paddingBottom: insetBottom,
    backgroundColor: colors.background,
  })}
`;

export const ScreenContent = styled.View<{ hasButton: boolean; insetBottom: number }>`
  ${({ theme: { normalizeSize }, hasButton, insetBottom }) => ({
    flexGrow: 1,
    paddingBottom: hasButton ? insetBottom + normalizeSize(55) : insetBottom,
  })}
`;

export const LoadingContainer = styled.View`
  ${() => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  })}
`;

export const ScreenScrollView = styled.ScrollView`
  ${() => ({
    flex: 1,
  })}
`;

export const ButtonContainer = styled.View<{ insetBottom: number }>`
  ${({ theme: { normalizeSize, colors }, insetBottom }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: normalizeSize(24),
    paddingBottom: insetBottom + normalizeSize(16),
    backgroundColor: colors.transparent,
  })}
`;
