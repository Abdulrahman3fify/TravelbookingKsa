import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Theme} from '../../../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingVertical: theme.spacingFactor * 2,
    },
    sectionTitle: {
      fontSize: theme.fontSize.h4,
      fontFamily: theme.fontWeight.bold,
      color: theme.color.black2,
      marginBottom: theme.spacingFactor * 3,
      lineHeight: moderateScale(24),
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: moderateScale(10),
    },
    cardContainer: {
      width: '31%',
      borderRadius: moderateScale(16),
      paddingHorizontal: theme.spacingFactor * 2,
      paddingTop: moderateScale(11),
      marginBottom: theme.spacingFactor * 2,
      alignItems: 'flex-start',
      height: moderateScale(120),
      borderWidth: 1,
      borderColor: theme.color.gray9,
    },
    cardImage: {
      width: moderateScale(32),
      height: moderateScale(32),
      borderRadius: moderateScale(8),
    },
    cardText: {
      fontSize: moderateScale(11),
      fontFamily: theme.fontWeight.medium,
      color: theme.color.black,
      lineHeight: moderateScale(18),
      marginTop: theme.spacingFactor * 2,
    },
    additionalSection: {
      marginVertical: theme.spacingFactor * 4,
      gap: theme.spacingFactor * 3,
    },
    additionalTitle: {
      fontSize: moderateScale(16),
      fontFamily: theme.fontWeight.bold,
      color: theme.color.black2,
      lineHeight: moderateScale(24),
    },
    optionalText: {
      fontSize: moderateScale(12),
      color: theme.color.gray19,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacingFactor * 2,
    },
    optionalTextContainer: {
      backgroundColor: theme.color.optionalTextBackground,
      paddingHorizontal: theme.spacingFactor * 2,
      paddingVertical: theme.spacingFactor,
      borderRadius: moderateScale(6),
    },
  });
