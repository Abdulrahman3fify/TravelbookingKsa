export const Fonts = {
  // LamaSans fonts
  LamaSansBlack: 'LamaSans-Black',
  LamaSansBlackItalic: 'LamaSans-BlackItalic',
  LamaSansBold: 'LamaSans-Bold',
  LamaSansBoldItalic: 'LamaSans-BoldItalic',
  LamaSansExtraBold: 'LamaSans-ExtraBold',
  LamaSansExtraBoldItalic: 'LamaSans-ExtraBoldItalic',
  LamaSansExtraLight: 'LamaSans-ExtraLight',
  LamaSansExtraLightItalic: 'LamaSans-ExtraLightItalic',
  LamaSansLight: 'LamaSans-Light',
  LamaSansLightItalic: 'LamaSans-LightItalic',
  LamaSansMedium: 'LamaSans-Medium',
  LamaSansMediumItalic: 'LamaSans-MediumItalic',
  LamaSansRegular: 'LamaSans-Regular',
  LamaSansRegularItalic: 'LamaSans-RegularItalic',
  LamaSansSemiBold: 'LamaSans-SemiBold',
  LamaSansSemiBoldItalic: 'LamaSans-SemiBoldItalic',
  LamaSansThin: 'LamaSans-Thin',
  LamaSansThinItalic: 'LamaSans-ThinItalic',
  // Tajawal fonts (keeping for backward compatibility)
  TajawalBlack: 'Tajawal-Black',
  TajawalBold: 'Tajawal-Bold',
  TajawalExtraBold: 'Tajawal-ExtraBold',
  TajawalExtraLight: 'Tajawal-ExtraLight',
  TajawalLight: 'Tajawal-Light',
  TajawalMedium: 'Tajawal-Medium',
  TajawalRegular: 'Tajawal-Regular',
} as const;

// Font weights for LamaSans
export const LamaSansFontWeights = {
  black: Fonts.LamaSansBlack,
  bold: Fonts.LamaSansBold,
  extraBold: Fonts.LamaSansExtraBold,
  extraLight: Fonts.LamaSansExtraLight,
  light: Fonts.LamaSansLight,
  medium: Fonts.LamaSansMedium,
  regular: Fonts.LamaSansRegular,
  semiBold: Fonts.LamaSansSemiBold,
  thin: Fonts.LamaSansThin,
} as const;

// Font weights for Tajawal (keeping for backward compatibility)
export const ArabicFontWeights = {
  black: Fonts.TajawalBlack,
  bold: Fonts.TajawalBold,
  extraBold: Fonts.TajawalExtraBold,
  extraLight: Fonts.TajawalExtraLight,
  light: Fonts.TajawalLight,
  medium: Fonts.TajawalMedium,
  regular: Fonts.TajawalRegular,
} as const;

// Define all possible weights
export interface FontFamily {
  regular: string;
  light: string;
  extraLight: string;
  medium: string;
  bold: string;
  extraBold: string;
  black: string;
  semiBold?: string;
  thin?: string;
}

// Keys union type
export type FontFamilyTypes =
  | 'regular'
  | 'light'
  | 'extraLight'
  | 'medium'
  | 'bold'
  | 'extraBold'
  | 'black'
  | 'semiBold'
  | 'thin';

// Central font families object
export const fontFamilies: Record<string, FontFamily> = {
  LamaSans: {
    regular: LamaSansFontWeights.regular,
    light: LamaSansFontWeights.light,
    extraLight: LamaSansFontWeights.extraLight,
    medium: LamaSansFontWeights.medium,
    bold: LamaSansFontWeights.bold,
    extraBold: LamaSansFontWeights.extraBold,
    black: LamaSansFontWeights.black,
    semiBold: LamaSansFontWeights.semiBold,
    thin: LamaSansFontWeights.thin,
  },
  Tajawal: {
    regular: ArabicFontWeights.regular,
    light: ArabicFontWeights.light,
    extraLight: ArabicFontWeights.extraLight,
    medium: ArabicFontWeights.medium,
    bold: ArabicFontWeights.bold,
    extraBold: ArabicFontWeights.extraBold,
    black: ArabicFontWeights.black,
  },
};
