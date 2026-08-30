import { useTheme } from 'styled-components/native';

import type { Question } from '../types';

import { QuestionsContentContainer, QuestionsInfoContainer } from './styles';

import { Image, Text } from '@/components';

const QuestionsCard = ({ question }: { question: Question }) => {
  const { normalizeSize, colors } = useTheme();

  return (
    <QuestionsContentContainer>
      <Image
        source={{ uri: question.image_uri }}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: normalizeSize(12),
        }}
      />
      <QuestionsInfoContainer>
        <Text color={colors.white} variant="bodyMedium">
          {question.title}
        </Text>
      </QuestionsInfoContainer>
    </QuestionsContentContainer>
  );
};

export { QuestionsCard };
