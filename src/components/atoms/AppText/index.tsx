import {
  View,
  Text,
  TextProps,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useThemeStore} from '../../../zustand/useThemeStore';
import {generateStyles} from './styles';
import {FontFamilyTypes} from '../../../constants/theme/fonts';
import {getFontFamily} from '../../../utils/fontFamilies';
import {useTranslation} from 'react-i18next';
import {Theme} from '../../../utils/types/ThemeTypes';
interface ComponentProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[] | StyleProp<ViewStyle>;
  variant?: FontFamilyTypes;
  numberOfLines?: number;
  color?: string;
}
function AppText({
  children,
  numberOfLines,
  style,
  variant = 'regular',
  color,
  ...props
}: ComponentProps) {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);
  const {t} = useTranslation();
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.defaultText,
        getFontFamily(variant),
        color && {
          color: typeof color === 'string' ? color : Theme.TextColor.color,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
}

export default AppText;
