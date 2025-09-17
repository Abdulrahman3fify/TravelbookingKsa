import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Theme} from '../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme, bottom: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.basic600,
    },
    contentContainer: {
      flex: 1,
      paddingBottom: bottom * 5.5,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: theme.spacingFactor * 3,
    },
    sloganTxt: {
      fontSize: moderateScale(20),
      textAlign: 'left',
      marginTop: theme.spacingFactor,
      lineHeight: moderateScale(28),
    },
  });
