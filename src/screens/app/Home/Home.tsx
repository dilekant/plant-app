import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { CategoriesCard, QuestionsCard } from './components';
import { useCategoriesQuery } from './queries/useCategoriesQuery';
import { useQuestionsQuery } from './queries/useQuestionsQuery';
import { ContentContainer, HeaderContainer, TextContainer } from './styles';

import images from '@/assets/images';
import { Image, PremiumCard, Screen, SearchInput, Text } from '@/components';

const Home = () => {
  const insets = useSafeAreaInsets();
  const { normalizeSize, colors } = useTheme();

  const { data: questions, isLoading: questionsLoading } = useQuestionsQuery();
  const { data: categories, isLoading: categoriesLoading } = useCategoriesQuery();

  const isScreenLoading = questionsLoading || categoriesLoading;

  return (
    <Screen
      isScreenLoading={isScreenLoading}
      // scrollable={false}
      style={{
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <Image
        source={images.homeTopBackground}
        style={{
          height: normalizeSize(175),
          width: '100%',
          position: 'absolute',
        }}
      />

      <HeaderContainer insetTop={insets.top}>
        <TextContainer>
          <Text color={colors.primaryText} variant="bodyLarge">
            Hi, plant lover!
          </Text>
          <Text color={colors.primaryText} variant="titleMedium">
            Good Afternoon! ⛅
          </Text>
        </TextContainer>
        <SearchInput placeholder="Search for plants" />
      </HeaderContainer>

      <ContentContainer>
        <PremiumCard />
        <Text
          color={colors.primaryText}
          style={{ marginTop: normalizeSize(24) }}
          variant="bodyMedium"
        >
          Get Started
        </Text>
        <FlatList
          horizontal
          data={questions}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <QuestionsCard question={item} />}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: normalizeSize(16), marginBottom: normalizeSize(24) }}
        />
        <FlatList
          data={categories?.data ?? []}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => <CategoriesCard category={item} />}
          showsVerticalScrollIndicator={false}
        />
      </ContentContainer>
    </Screen>
  );
};

export default Home;
