import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {
  RoundedBackSVG,
  ShareSVG,
  SaveSVG,
  PinSVG,
} from '../../../../../assets/svgs';
import AppText from '../../../../../components/atoms/AppText';
import {generateStyles} from '../styles';
import {useThemeStore} from '../../../../../zustand/useThemeStore';
import {TravelDestination} from '../../../types';

const RenderDestination = ({
  item,
  onDestinationPress,
  handleBookmarkPress,
  handleSharePress,
  top,
}: {
  item: TravelDestination;
  onDestinationPress: (item: TravelDestination) => void;
  handleBookmarkPress: (item: TravelDestination) => void;
  handleSharePress: (item: TravelDestination) => void;
  top: number;
}) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);
  return (
    <TouchableOpacity
      style={styles.slideContainer}
      activeOpacity={0.9}
      onPress={() => onDestinationPress?.(item)}>
      <ImageBackground
        source={{uri: item.mainImage}}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        <View style={[styles.overlay, {paddingTop: top}]}>
          <View style={[styles.topActions]}>
            <TouchableOpacity onPress={() => handleBookmarkPress(item)}>
              <RoundedBackSVG />
            </TouchableOpacity>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleSharePress(item)}>
                <ShareSVG />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSharePress(item)}>
                <SaveSVG />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.locationInfo}>
            <View style={styles.locationBadge}>
              <AppText style={styles.flagIcon}>{item.flag}</AppText>
              <AppText style={styles.locationBadgeText}>{item.country}</AppText>
            </View>

            <AppText style={styles.locationTitle} variant="bold">
              {item.title}
            </AppText>

            <View style={styles.locationDetails}>
              <PinSVG />
              <AppText style={styles.locationDescription}>
                {item.locationTxt}
              </AppText>
            </View>

            <View style={styles.locationBadgeSmall}>
              <AppText style={styles.locationSmallText}>
                {item.descriptionSmall}
              </AppText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RenderDestination;
