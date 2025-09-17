import {NavigationProp} from '@react-navigation/native';
import {Routes} from '../../constants/Routes';

export type Navigation = NavigationProp<any>;
export type AuthStackParamList = {
  [Routes.OnBoardingScreen]: undefined;
  [Routes.SignUpScreen]: undefined;
  [Routes.LoginScreen]: undefined;
};

// const navigation =
// useNavigation<NativeStackNavigationProp<BottomBarStackParamList>>();
