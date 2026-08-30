import styled from 'styled-components/native';

import { FONT_FAMILY } from '@/assets';

export const StyledText = styled.Text<{
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  lineHeight?: number;
  letterSpacing?: number;
}>`
  ${({
    theme: { normalizeSize, colors },
    fontSize = 14,
    fontWeight = 'normal',
    color,
    textAlign = 'auto',
    lineHeight,
    letterSpacing,
  }) => ({
    fontSize: normalizeSize(fontSize),
    fontFamily: FONT_FAMILY.rubik,
    fontWeight,
    color: color || colors.primaryText,
    textAlign: textAlign as any,
    lineHeight: lineHeight ? normalizeSize(lineHeight) : normalizeSize(fontSize * 1.5),
    letterSpacing,
  })}
`;
