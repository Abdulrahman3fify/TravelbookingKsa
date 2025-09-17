import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Theme} from '../../../../utils/types/ThemeTypes';
import {isIOS} from '../../../../utils/platformUtil';

export const generateStyles = (theme: Theme, bottom: number) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      borderRadius: moderateScale(20),
      width: '90%',
      backgroundColor: theme.color.white,
      paddingHorizontal: theme.spacingFactor * 4,
      paddingVertical: isIOS() ? theme.spacingFactor * 3 : 0,
      paddingTop: theme.spacingFactor * 3,
      borderWidth: 1,
      borderColor: theme.color.gray17,
      marginBottom: bottom,
      ...theme.boxShadow,
      shadowOffset: {width: 0, height: -2},
    },
    priceSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacingFactor * 4,
    },
    priceInfo: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: theme.spacingFactor,
    },
    priceLabel: {
      fontSize: moderateScale(12),
      color: theme.color.gray18,
      marginBottom: theme.spacingFactor / 2,
    },
    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    currency: {
      fontSize: theme.fontSize.bodyText,
      color: theme.color.black,
      marginLeft: theme.spacingFactor,
    },
    price: {
      fontSize: theme.fontSize.h2,
      color: theme.color.black,
    },
    validityInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.color.gray3,
      paddingHorizontal: theme.spacingFactor * 2,
      paddingVertical: theme.spacingFactor,
      borderRadius: moderateScale(6),
      gap: theme.spacingFactor,
    },
    validityIcon: {
      fontSize: moderateScale(14),
      marginLeft: theme.spacingFactor,
    },
    validityText: {
      fontSize: theme.fontSize.small,
      color: theme.color.gray18,
    },
    buttonSection: {
      flexDirection: 'row',
      gap: theme.spacingFactor * 2,
    },
    sendMessageButton: {
      flex: 1,
      backgroundColor: theme.color.white,
      borderWidth: 1,
      borderColor: theme.color.gray17,
      paddingVertical: theme.spacingFactor * 3,
      borderRadius: moderateScale(16),
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendMessageText: {
      fontSize: theme.fontSize.bodyText,
      color: '#383838',
    },
    bookNowButton: {
      flex: 1,
      borderRadius: moderateScale(16),
      alignItems: 'center',
      justifyContent: 'center',
    },
    bookNowText: {
      fontSize: theme.fontSize.bodyText,
      color: theme.color.white,
    },
  });
