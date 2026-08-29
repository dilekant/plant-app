import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({ theme: { colors } }) => ({ flex: 1, backgroundColor: colors.background })}
`;
export const Header = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    backgroundColor: colors.primary,
    paddingHorizontal: normalizeSize(20),
    paddingVertical: normalizeSize(24),
  })}
`;
export const Title = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(28),
    fontWeight: 'bold',
    color: colors.white,
  })}
`;
export const Subtitle = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(14),
    color: colors.mutedLight,
    marginTop: normalizeSize(4),
  })}
`;
export const Card = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    backgroundColor: colors.surface,
    marginHorizontal: normalizeSize(16),
    marginVertical: normalizeSize(8),
    padding: normalizeSize(16),
    borderRadius: normalizeSize(12),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: normalizeSize(2) },
    shadowOpacity: 0.1,
    shadowRadius: normalizeSize(3),
    elevation: 3,
  })}
`;
export const CardTitle = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(18),
    fontWeight: '600',
    color: colors.primaryText,
    marginBottom: normalizeSize(8),
  })}
`;
export const CardText = styled.Text`
  ${({ theme: { normalizeSize, colors } }) => ({
    fontSize: normalizeSize(14),
    color: colors.secondaryText,
    lineHeight: normalizeSize(20),
  })}
`;
