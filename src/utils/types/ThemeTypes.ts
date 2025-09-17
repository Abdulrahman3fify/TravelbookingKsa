export enum Global {
  LightTheme = 'LightTheme',
  DarkTheme = 'DarkTheme',
}

export type ThemeAction = Global.LightTheme | Global.DarkTheme;

interface ColorPalette {
  primary00: string;
  primary100: string;
  primary200: string;
  primary400: string;
  primary500: string;
  primary700: string;
  shadow: string;
  basicBlack: string;
  basicWhite: string;
  basic100: string;
  basic200: string;
  basic300: string;
  basic400: string;
  basic500: string;
  basic600: string;
  basic700: string;
  accent: string;
  accentLight: string;
  danger100: string;
  danger200: string;
  success200: string;
  success100: string;
  success300: string;
  primary: string;
  blueExpress: string;
  blueExpressFaded: string;
  blueText: string;
  blueFaded: string;
  lightBlue: string;
  lightBlue1: string;
  paleGreen: string;
  secondary: string;
  success: string;
  warn: string;
  error: string;
  spider: string;
  white: string;
  offWhite: string;
  white2: string;
  white3: string;
  black: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  gray13: string;
  gray14: string;
  gray15: string;
  gray16: string;
  gray17: string;
  gray18: string;
  gray19: string;
  blue: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  grayBackground1: string;
  grayBackground2: string;
  grayBackground3: string;
  grayBackground4: string;
  border: string;
  divider: string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  iconBackground: string;
  placeholderColor: string;
  dimRed: string;
  red: string;
  red2: string;
  black1: string;
  black2: string;
  black3: string;
  black4: string;
  black5?: string;
  black6?: string;
  black8?: string;
  green: string;
  green1: string;
  green3?: string;
  greenLight: string;
  greenLight2?: string;
  lavenderLight: string;
  offWhite2: string;
  lightbg1: string;
  orange: string;
  oldLace: string;
  navColor: string;
  optionalTextColor: string;
  optionalTextBackground: string;
}

interface FontSizes {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  body: number;
  tabLabel: number;
  caption: number;
  title: number;
  subtitle: number;
  subTitleText: number;
  bodyText: number;
  bodyTextSmall: number;
  bodyTextMedium?: number;
  small: number;
  subTextSmall?: number;
}

interface FontWeight {
  black: 'Tajawal-Black';
  bold: 'Tajawal-Bold';
  extraBold: 'Tajawal-ExtraBold';
  extraLight: 'Tajawal-ExtraLight';
  light: 'Tajawal-Light';
  medium: 'Tajawal-Medium';
  regular: 'Tajawal-Regular';
}

export interface Theme {
  type: ThemeAction;
  color: ColorPalette;
  fontSize: FontSizes;
  fontWeight: FontWeight;
  spacingFactor: number;
  background: {
    color: string;
  };
  TextColor: {
    color: string;
  };
  boxShadow: {
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
}
