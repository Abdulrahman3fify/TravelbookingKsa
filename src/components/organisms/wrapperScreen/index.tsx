import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {generateStyles} from './styles';
import {useThemeStore} from '../../../zustand/useThemeStore';
import {isIOS} from '../../../utils/platformUtil';

export enum ScreenTypes {
  SCROLL = 'scroll',
  NORMAL = 'normal',
}

type presentType = ScreenTypes.SCROLL | ScreenTypes.NORMAL;
interface ScreenProps {
  present?: presentType;
  CustomeStyle?: any;
  unSafeVertical?: boolean;
  unSafeHorizontal?: boolean;
  unSafeBottom?: boolean;
  children: React.ReactNode;
  Header?: React.ReactNode;
  isLoadingScreen?: boolean;
}
const Screen = ({
  present = ScreenTypes.NORMAL,
  CustomeStyle,
  unSafeVertical = false,
  unSafeHorizontal = false,
  unSafeBottom = false,
  children,
  isLoadingScreen,
  Header,
}: ScreenProps) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);
  const insets = useSafeAreaInsets();

  const HorizontalSafeArea = {
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
  };

  const VerticalSafeArea = {
    paddingBottom: unSafeBottom
      ? 0
      : insets.bottom + (isIOS() ? 0 : moderateScale(20)),
    paddingTop: insets.top,
  };

  const ContentScreen = () => {
    return (
      <View
        style={[
          !unSafeHorizontal && HorizontalSafeArea,
          CustomeStyle && CustomeStyle,
          {flex: 1},
        ]}>
        {children}
      </View>
    );
  };

  return (
    <View
      style={[!unSafeVertical && VerticalSafeArea, styles.WrapperConatiner]}>
      {/* add loading screen */}
      {/* {isLoadingScreen && <Loader />} */}
      {Header && Header}
      {present === ScreenTypes.SCROLL ? (
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={[styles.ScrollContainer]}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {ContentScreen()}
        </ScrollView>
      ) : (
        <View style={[styles.NormalContainer]}>{ContentScreen()}</View>
      )}
    </View>
  );
};

export default Screen;
