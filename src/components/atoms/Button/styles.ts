import {StyleSheet} from 'react-native';
import {Theme} from '../../types';
import {moderateScale} from 'react-native-size-matters';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    buttonText: {
      fontWeight: 'bold',
    },
    disabledStyles: {
      backgroundColor: theme.color.gray13,
      color: theme.color.offWhite2,
      opacity: 0.6,
    },
  });
