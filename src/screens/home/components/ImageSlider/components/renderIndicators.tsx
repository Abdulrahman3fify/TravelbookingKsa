import {TouchableOpacity, View} from 'react-native';
import {generateStyles} from '../styles';
import {useThemeStore} from '../../../../../zustand/useThemeStore';
import {TravelDestination} from '../../../data';

const RenderIndicators = ({
  data,
  currentIndex,
  flatListRef,
}: {
  data: TravelDestination[];
  currentIndex: number;
  flatListRef: any;
}) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);
  return (
    <View style={styles.scrollIndicators}>
      {data.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.indicator,
            index === currentIndex && styles.activeIndicator,
          ]}
          onPress={() => {
            flatListRef.current?.scrollToIndex({index, animated: true});
          }}
        />
      ))}
    </View>
  );
};
export default RenderIndicators;
