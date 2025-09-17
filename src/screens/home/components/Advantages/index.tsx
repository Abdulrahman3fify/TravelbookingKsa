import {View, Image} from 'react-native';
import React from 'react';
import {useThemeStore} from '../../../../zustand/useThemeStore';
import {generateStyles} from './styles';
import AppText from '../../../../components/atoms/AppText';
import {advantageCards, additionalServices} from '../../data';
import {AdvantageCard} from '../../types';

const Advantages = () => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);

  const renderCard = (card: AdvantageCard) => (
    <View key={card.id} style={styles.cardContainer}>
      <Image
        source={card.image}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <AppText variant="regular" style={styles.cardText} numberOfLines={2}>
        {card.title}
      </AppText>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppText variant="semiBold" style={styles.sectionTitle}>
        الأنشطة
      </AppText>
      <View style={styles.gridContainer}>{advantageCards.map(renderCard)}</View>

      <View style={styles.additionalSection}>
        <View style={styles.titleRow}>
          <AppText variant="semiBold" style={styles.additionalTitle}>
            الإضافات
          </AppText>
          <View style={styles.optionalTextContainer}>
            <AppText variant="semiBold" style={styles.optionalText}>
              اختياري مدفوعة
            </AppText>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {additionalServices.map(renderCard)}
        </View>
      </View>
    </View>
  );
};

export default Advantages;
