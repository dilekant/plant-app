import styled from 'styled-components/native';

export const HeaderTextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    paddingHorizontal: normalizeSize(24),
  })}
`;

export const CarouselPage = styled.View<{ width: number }>`
  ${({ width }) => ({ width, flex: 1 })}
`;

export const PaginationContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    marginTop: normalizeSize(32.5),
  })}
`;

export const ContentContainer = styled.View<{ insetTop: number }>`
  ${({ insetTop, theme: { normalizeSize } }) => ({
    top: insetTop + normalizeSize(200),
  })}
`;

export const TextContainer = styled.View`
  ${({ theme: { normalizeSize } }) => ({
    paddingHorizontal: normalizeSize(24),
    marginBottom: normalizeSize(20),
  })}
`;

export const FeaturesContainer = styled.ScrollView`
  ${({ theme: { normalizeSize } }) => ({
    marginLeft: normalizeSize(24),
    marginBottom: normalizeSize(24),
  })}
`;
export const FeaturesContentContainer = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    marginRight: normalizeSize(8),
    borderRadius: normalizeSize(14),
    padding: normalizeSize(16),
    width: normalizeSize(156),
    height: normalizeSize(130),
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    backgroundColor: colors.blur,
  })}
`;

export const PlanDiscountContainer = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    paddingLeft: normalizeSize(12),
    paddingVertical: normalizeSize(4),
    paddingRight: normalizeSize(9),
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: normalizeSize(14),
    borderBottomLeftRadius: normalizeSize(20),
    backgroundColor: colors.primary,
    justifyContent: 'center',
  })}
`;

export const PlansContainer = styled.TouchableOpacity<{
  isSelected: boolean;
  isDiscount?: boolean;
}>`
  ${({ isSelected, isDiscount, theme: { normalizeSize, colors } }) => ({
    marginBottom: normalizeSize(16),
    borderRadius: normalizeSize(isSelected && isDiscount ? 20 : 14),
    paddingHorizontal: normalizeSize(16),
    paddingVertical: normalizeSize(13),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.blur,
    borderWidth: isSelected ? 1.5 : 0.5,
    borderColor: isSelected ? colors.primary : colors.whiteOpacity30,
    gap: normalizeSize(12),
  })}
`;

export const PlansSelectedCircleContainer = styled.View<{ isSelected: boolean }>`
  ${({ isSelected, theme: { normalizeSize, colors } }) => ({
    width: normalizeSize(24),
    height: normalizeSize(24),
    backgroundColor: isSelected ? colors.primary : colors.whiteOpacity15,
    borderRadius: normalizeSize(24),
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

export const PlansSelectedCircle = styled.View`
  ${({ theme: { normalizeSize, colors } }) => ({
    width: normalizeSize(6),
    height: normalizeSize(6),
    backgroundColor: colors.white,
    borderRadius: normalizeSize(3),
  })}
`;
