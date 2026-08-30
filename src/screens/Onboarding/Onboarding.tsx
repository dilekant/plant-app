import { useEffect, useRef, useState } from 'react';

import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { OnboardingPageOne } from './OnboardingPageOne';
import { OnboardingPageTwo } from './OnboardingPageTwo';
import { PaywallPage } from './PaywallPage';
import PaywallFooter from './components/PaywallFooter';
import { CarouselPage, PaginationContainer } from './styles';

import { Screen } from '@/components';
import { PaginationDots } from '@/components/PaginationDots';
import { colors, useTheme } from '@/theme';
import { storageUtils } from '@/utils/storageUtils';

const pages = [OnboardingPageOne, OnboardingPageTwo, PaywallPage];

const OnboardingContainer = () => {
  const flatListRef = useRef<FlatList<(typeof pages)[number]>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();
  const { normalizeSize } = useTheme();
  const insets = useSafeAreaInsets();
  const isLastPage = activeIndex === pages.length - 1;

  const handleNext = async () => {
    if (activeIndex < pages.length - 1) {
      flatListRef.current?.scrollToIndex({ animated: true, index: activeIndex + 1 });
      return;
    }

    await storageUtils.setOnboardingCompleted();
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    flatListRef.current?.scrollToOffset({ animated: false, offset: activeIndex * width });
  }, [activeIndex, width]);

  const renderItem = ({ item: Page }: ListRenderItemInfo<(typeof pages)[number]>) => (
    <CarouselPage width={width}>
      <Page />
    </CarouselPage>
  );

  return (
    <>
      <StatusBar barStyle={isLastPage ? 'light-content' : 'dark-content'} />
      <Screen
        buttonContainerStyle={{ paddingBottom: insets.bottom + normalizeSize(isLastPage ? 0 : 20) }}
        footerComponent={
          !isLastPage ? (
            <PaginationContainer>
              <PaginationDots activeIndex={activeIndex} count={pages.length} />
            </PaginationContainer>
          ) : (
            <PaywallFooter />
          )
        }
        primaryButton={{
          text: isLastPage ? 'Try free for 3 days' : 'Continue',
          onPress: handleNext,
        }}
        style={{
          paddingHorizontal: 0,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: colors.primaryBackground,
        }}
      >
        <FlatList
          horizontal
          nestedScrollEnabled
          pagingEnabled
          data={pages}
          getItemLayout={(_, index) => ({ index, length: width, offset: width * index })}
          keyExtractor={(_, index) => index.toString()}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          ref={flatListRef}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </Screen>
    </>
  );
};

export default OnboardingContainer;
