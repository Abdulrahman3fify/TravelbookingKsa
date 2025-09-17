import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Theme} from '../../../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacingFactor * 4,
    },
    plannerCard: {
      borderRadius: moderateScale(15),
      paddingHorizontal: moderateScale(10),
    },
    plannerDescription: {
      fontSize: 12,
      color: 'rgba(67, 67, 67, 1)',
      lineHeight: moderateScale(20),
      marginBottom: theme.spacingFactor * 3,
    },
  });
