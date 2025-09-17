import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    ScrollContainer: {
      flexGrow: 1,
      backgroundColor: theme.background.color,
    },
    NormalContainer: {
      flex: 1,
      backgroundColor: theme.background.color,
    },
    WrapperConatiner: {flex: 1, backgroundColor: theme.color.white},
  });
