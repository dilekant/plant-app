import styled from 'styled-components/native';

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
    fontWeight,
    color: color || colors.primaryText,
    textAlign: textAlign as any,
    lineHeight: lineHeight ? normalizeSize(lineHeight) : normalizeSize(fontSize * 1.5),
    letterSpacing,
  })}
`;
