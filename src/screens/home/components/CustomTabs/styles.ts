import {StyleSheet} from 'react-native';
import {Theme} from '../../../../utils/types/ThemeTypes';
import {getFontFamily} from '../../../../utils/fontFamilies';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {isIOS} from '../../../../utils/platformUtil';

export const generateStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      marginVertical: verticalScale(20),
    },
    tabsContainer: {
      flexDirection: 'row',
      backgroundColor: theme.color.gray3,
      borderRadius: moderateScale(25),
      padding: moderateScale(4),
      marginHorizontal: scale(20),
      paddingHorizontal: scale(10),
    },
    tabButton: {
      flex: 1,
      paddingVertical: isIOS() ? verticalScale(10) : verticalScale(8),
      marginVertical: scale(2),
      borderRadius: moderateScale(21),
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeTabButton: {
      backgroundColor: theme.color.white,
      shadowColor: theme.color.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    tabText: {
      ...getFontFamily('medium'),
      fontSize: theme.fontSize.bodyText,
      color: theme.color.gray7,
      textAlign: 'center',
    },
    activeTabText: {
      color: theme.color.black,
      ...getFontFamily('semiBold'),
    },
    contentContainer: {
      marginTop: verticalScale(20),
      paddingHorizontal: moderateScale(20),
    },
  });
};
