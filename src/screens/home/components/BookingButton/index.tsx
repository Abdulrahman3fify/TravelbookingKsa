import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from '../../../../components/atoms/AppText';
import {useThemeStore} from '../../../../zustand/useThemeStore';
import {generateStyles} from './styles';
import {CalendarSVG, ReyallSVG} from '../../../../assets/svgs';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIOS} from '../../../../utils/platformUtil';
import LinearGradient from 'react-native-linear-gradient';
import {BookingButtonProps} from '../../types';

const BookingButton: React.FC<BookingButtonProps> = ({
  price = '3549',
  validUntil = '30 ديسمبر',
  onSendMessagePress,
}) => {
  const {bottom} = useSafeAreaInsets();
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme, bottom);

  return (
    <View style={styles.container}>
      <View style={styles.priceSection}>
        <View style={styles.priceInfo}>
          <AppText style={styles.priceLabel}>تبدأ من </AppText>
          <View style={styles.priceRow}>
            <AppText style={styles.price} variant="bold">
              {price}{' '}
            </AppText>
            <ReyallSVG />
          </View>
        </View>

        <View style={styles.validityInfo}>
          <CalendarSVG />
          <AppText style={styles.validityText} variant="semiBold">
            متاحة حتى {validUntil}
          </AppText>
        </View>
      </View>

      <SafeAreaView
        edges={isIOS() ? [] : ['bottom']}
        style={styles.buttonSection}>
        <LinearGradient
          colors={[Theme.color.primary400, Theme.color.primary500]}
          style={styles.bookNowButton}>
          <AppText style={styles.bookNowText} variant="bold">
            احجز الآن
          </AppText>
        </LinearGradient>

        <TouchableOpacity
          style={styles.sendMessageButton}
          onPress={onSendMessagePress}>
          <AppText variant="bold" style={styles.sendMessageText}>
            أرسل لنا رسالة
          </AppText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export {BookingButton};
