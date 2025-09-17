import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types/ThemeTypes';

export const generateStyles = (theme: Theme) =>
  StyleSheet.create({
    tabBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    activeBackground: {
      position: 'absolute',
    },
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    component: {
      height: 60,
      width: 60,
      marginTop: -5,
    },
    componentCircle: {
      flex: 1,
      borderRadius: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    iconContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      height: 36,
      width: 36,
    },
  });
