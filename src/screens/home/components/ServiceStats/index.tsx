import React from 'react';
import {View} from 'react-native';
import {useThemeStore} from '../../../../zustand/useThemeStore';
import {generateStyles} from './styles';
import {BedSVG, BreakFastSVG, FlightSVG} from '../../../../assets/svgs';
import {StarSVG} from '../../../../assets/svgs';
import {ServiceStatsProps, StatItemProps} from '../../types';
import StatItem from './components/StatItem';

const ServiceStats: React.FC<ServiceStatsProps> = ({stats}) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);

  const defaultStats: StatItemProps[] = [
    {icon: <FlightSVG />, label: 'داخلي فقط'},
    {icon: <BreakFastSVG />, label: 'إفطار فقط'},
    {icon: <StarSVG />, label: '5 نجوم'},
    {icon: <BedSVG />, label: '8 ليالي'},
  ];

  const displayStats = stats || defaultStats;

  return (
    <View style={styles.container}>
      {displayStats.map((stat, index) => (
        <StatItem key={index} icon={stat.icon} label={stat.label} />
      ))}
    </View>
  );
};

export {ServiceStats};
