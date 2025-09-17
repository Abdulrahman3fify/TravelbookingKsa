import React from 'react';
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import AppText from '../AppText';
import {generateStyles} from './styles';
import {FontFamilyTypes} from '../../../constants/theme/fonts';
import {Theme} from '../../../utils/types/ThemeTypes';
import {moderateScale} from 'react-native-size-matters';

interface ButtonProps extends TouchableOpacityProps {
  theme: Theme;
  title?: string;
  textStyle?: TextStyle | undefined | TextStyle[];
  style?: ViewStyle[] | ViewStyle;
  textVariant?: FontFamilyTypes;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  theme,
  style,
  textStyle,
  textVariant,
  LeftIcon,
  RightIcon,
  isLoading,
  ...props
}: ButtonProps) => {
  const styles = generateStyles(theme);

  const buttonStyle = [
    styles.button,
    props.disabled || isLoading
      ? styles.disabledStyles
      : {backgroundColor: theme.color.primary200},
  ];

  const buttonTextStyles = {
    paddingVertical: theme.spacingFactor * 2.5,
    fontSize: moderateScale(15),
    color: theme.color.white,
  };

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[buttonStyle, style]}
      {...props}>
      {LeftIcon}

      <AppText
        variant={textVariant || 'regular'}
        color={theme.color.secondary}
        style={[buttonTextStyles, textStyle]}>
        {!isLoading ? title : ''}
      </AppText>
      {RightIcon}
      {isLoading && <ActivityIndicator color={theme.color.white} />}
    </TouchableOpacity>
  );
};

export default Button;
