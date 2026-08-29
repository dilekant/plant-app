import styled from 'styled-components/native';

export const Container = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    flex: 1,
    backgroundColor: colors.surface,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalizeSize(20),
    paddingVertical: normalizeSize(40),
  })}
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(32),
    fontWeight: 'bold',
    marginBottom: normalizeSize(16),
    textAlign: 'center',
    color: colors.primaryText,
  })}
`;

export const Description = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(16),
    color: colors.secondaryText,
    textAlign: 'center',
    lineHeight: normalizeSize(24),
  })}
`;

export const ButtonContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    width: '100%',
    flexDirection: 'row',
    gap: normalizeSize(12),
    marginBottom: normalizeSize(20),
  })}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme: { normalizeSize, colors } }) => ({
    flex: 1,
    paddingVertical: normalizeSize(14),
    backgroundColor: colors.primary,
    borderRadius: normalizeSize(8),
    alignItems: 'center',
  })}
`;

export const ButtonText = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(16),
    fontWeight: '600',
    color: colors.white,
  })}
`;

export const SecondaryButton = styled.TouchableOpacity`
  ${({ theme: { normalizeSize, colors } }) => ({
    flex: 1,
    paddingVertical: normalizeSize(14),
    backgroundColor: colors.border,
    borderRadius: normalizeSize(8),
    alignItems: 'center',
  })}
`;

export const SecondaryButtonText = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(16),
    fontWeight: '600',
    color: colors.text,
  })}
`;
