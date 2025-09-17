import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    defaultText: {
      color: theme.color.black,
      fontSize: theme.fontSize.body,
      textAlign: 'left',
      flexWrap: 'wrap',
    },
  });
