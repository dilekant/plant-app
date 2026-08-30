import { useEffect, useRef, useState } from 'react';

import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { OnboardingPageOne } from './OnboardingPageOne';
import { OnboardingPageTwo } from './OnboardingPageTwo';
import { PaywallPage } from './PaywallPage';
import { PaginationDots, PaywallFooter } from './components';
import { CarouselPage, PaginationContainer } from './styles';

import { Screen } from '@/components';
import { completeOnboarding } from '@/store/onboardingSlice';

const pages = [OnboardingPageOne, OnboardingPageTwo, PaywallPage];

const OnboardingContainer = () => {
  const dispatch = useDispatch();
  const flatListRef = useRef<FlatList<(typeof pages)[number]>>(null);

  const { width } = useWindowDimensions();
  const { normalizeSize, colors } = useTheme();
  const scrollX = useSharedValue(0);

  const insets = useSafeAreaInsets();

  const [activeIndex, setActiveIndex] = useState(0);
  const isLastPage = activeIndex === pages.length - 1;

  const handleNext = () => {
    if (activeIndex < pages.length - 1) {
      flatListRef.current?.scrollToIndex({ animated: true, index: activeIndex + 1 });
      return;
    }

    dispatch(completeOnboarding());
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const footerBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollX.value,
      [0, width, width * (pages.length - 1)],
      [colors.white, colors.white, colors.primaryBackground]
    ),
  }));

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
        buttonContainerBackground={
          <Animated.View
            pointerEvents="none"
            style={[StyleSheet.absoluteFill, footerBackgroundStyle]}
          />
        }
        buttonContainerStyle={{
          paddingBottom: insets.bottom + normalizeSize(isLastPage ? 0 : 20),
        }}
        contentContainerStyle={{
          paddingBottom: 0,
        }}
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
        <Animated.FlatList
          horizontal
          nestedScrollEnabled
          pagingEnabled
          data={pages}
          getItemLayout={(_, index) => ({ index, length: width, offset: width * index })}
          keyExtractor={(_, index) => index.toString()}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScroll={handleScroll}
          ref={flatListRef}
          renderItem={renderItem}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        />
      </Screen>
    </>
  );
};

export default OnboardingContainer;
