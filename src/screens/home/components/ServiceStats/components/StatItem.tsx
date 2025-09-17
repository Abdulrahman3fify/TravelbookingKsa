import {View} from 'react-native';
import React from 'react';
import AppText from '../../../../../components/atoms/AppText';
import {useThemeStore} from '../../../../../zustand/useThemeStore';
import {generateStyles} from '../styles';
import {StatItemProps} from '../../../types';

const StatItem: React.FC<StatItemProps> = ({icon, label}) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);

  return (
    <View style={styles.statItem}>
      {icon}
      <AppText style={styles.statLabel} variant="medium">
        {label}
      </AppText>
    </View>
  );
};

export default StatItem;
