import {
  FontFamily,
  FontFamilyTypes,
  fontFamilies,
} from '../constants/theme/fonts';

export const getFontFamily = (varient: FontFamilyTypes) => {
  const selectedFontFamily: FontFamily = fontFamilies.LamaSans;
  return {fontFamily: selectedFontFamily[varient]};
};
