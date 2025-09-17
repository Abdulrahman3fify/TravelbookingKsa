import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Theme} from '../../../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: moderateScale(15),
      paddingVertical: theme.spacingFactor * 4,
      paddingHorizontal: theme.spacingFactor * 2,
    },
    statItem: {
      alignItems: 'center',
      flex: 1,
    },
    statIcon: {
      fontSize: moderateScale(24),
      marginBottom: theme.spacingFactor,
    },
    statLabel: {
      fontSize: theme.fontSize.small,
      color: theme.color.gray4,
      textAlign: 'center',
      marginBottom: theme.spacingFactor / 2,
      marginTop: moderateScale(12),
    },
    statValue: {
      fontSize: theme.fontSize.bodyText,
      color: theme.color.black,
      textAlign: 'center',
    },
  });
