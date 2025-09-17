import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Theme} from '../../../../utils/types/ThemeTypes';

const {width, height} = Dimensions.get('window');

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: height * 0.6,
      marginBottom: theme.spacingFactor * 4,
    },
    slideContainer: {
      width: width,
      height: height * 0.6,
      overflow: 'hidden',
    },
    backgroundImage: {
      flex: 1,
      width: width,
      height: '100%',
    },
    imageStyle: {
      borderRadius: moderateScale(20),
      borderBottomLeftRadius: moderateScale(0),
      borderBottomRightRadius: moderateScale(0),
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'space-between',
      padding: theme.spacingFactor * 4,
    },
    topActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacingFactor * 2,
    },
    bookmarkButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: moderateScale(20),
      padding: theme.spacingFactor * 2,
      minWidth: moderateScale(40),
      alignItems: 'center',
    },
    shareButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: moderateScale(20),
      padding: theme.spacingFactor * 2,
      minWidth: moderateScale(40),
      alignItems: 'center',
    },
    bookmarkIcon: {
      fontSize: moderateScale(18),
    },
    shareIcon: {
      fontSize: moderateScale(16),
    },
    locationInfo: {
      alignItems: 'flex-start',
    },
    locationBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      paddingHorizontal: theme.spacingFactor * 3,
      paddingVertical: theme.spacingFactor,
      borderRadius: moderateScale(20),
      marginBottom: theme.spacingFactor * 2,
      gap: theme.spacingFactor,
    },
    locationBadgeText: {
      color: theme.color.white,
      fontSize: theme.fontSize.small,
      marginRight: theme.spacingFactor,
    },
    flagIcon: {
      fontSize: moderateScale(16),
    },
    locationBadgeSmall: {
      paddingHorizontal: theme.spacingFactor * 2,
      paddingVertical: theme.spacingFactor / 2,
      borderRadius: moderateScale(12),
      marginBottom: theme.spacingFactor * 4,
      alignSelf: 'flex-start',
    },
    locationSmallText: {
      color: theme.color.white,
      fontSize: moderateScale(12),
      lineHeight: moderateScale(18),
    },
    locationTitle: {
      color: theme.color.white,
      fontSize: theme.fontSize.h2,
      marginBottom: theme.spacingFactor,
      textAlign: 'right',
    },
    locationDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacingFactor * 2,
      paddingVertical: theme.spacingFactor,
      borderRadius: moderateScale(15),
      gap: theme.spacingFactor,
    },
    locationIcon: {
      fontSize: moderateScale(14),
      marginRight: theme.spacingFactor,
    },
    locationDescription: {
      color: theme.color.white,
      fontSize: moderateScale(13),
      flex: 1,
      lineHeight: moderateScale(22),
    },
    scrollIndicators: {
      position: 'absolute',
      bottom: theme.spacingFactor * 3,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacingFactor * 4,
    },
    indicator: {
      width: moderateScale(8),
      height: moderateScale(5),
      borderRadius: moderateScale(4),
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      marginHorizontal: theme.spacingFactor / 2,
    },
    activeIndicator: {
      backgroundColor: theme.color.white,
      width: moderateScale(22),
    },
    actions: {
      flexDirection: 'row',
      gap: theme.spacingFactor * 2,
      alignItems: 'center',
    },
  });
