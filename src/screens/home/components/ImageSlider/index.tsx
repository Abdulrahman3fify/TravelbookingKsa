import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useThemeStore} from '../../../../zustand/useThemeStore';
import {generateStyles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RenderIndicators from './components/renderIndicators';
import RenderDestination from './components/renderDestination';
import {screenWidth} from '../../../../utils/platformUtil';
import {ImageSliderProps, TravelDestination} from '../../types';

const ImageSlider: React.FC<ImageSliderProps> = ({
  data,
  onDestinationPress,
}) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const {top} = useSafeAreaInsets();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const newIndex = Math.round(contentOffset.x / screenWidth);
    setCurrentIndex(newIndex);
  };

  const handleBookmarkPress = (destination: TravelDestination) => {
    console.log('Bookmark pressed for:', destination.country);
  };

  const handleSharePress = (destination: TravelDestination) => {
    console.log('Share pressed for:', destination.country);
  };

  const renderDestination = ({item}: {item: TravelDestination}) => {
    return (
      <RenderDestination
        item={item}
        onDestinationPress={onDestinationPress!}
        handleBookmarkPress={handleBookmarkPress}
        handleSharePress={handleSharePress}
        top={top}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderDestination}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
      />
      <RenderIndicators
        data={data}
        currentIndex={currentIndex}
        flatListRef={flatListRef}
      />
    </View>
  );
};

export {ImageSlider};
