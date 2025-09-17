import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './lang/i18n';
import {Alert, I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

const switchLanguage = async () => {
  const newLang = i18n.language === 'ar' ? 'en' : 'ar';
  await i18n.changeLanguage(newLang);
  await AsyncStorage.setItem('appLanguage', newLang);

  if (newLang === 'ar') {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }
  // Restart app needed when switching RTL <-> LTR
  Alert.alert(
    'Restart Required',
    'Please restart the app to apply layout changes.',
    [
      {
        text: 'OK',
        onPress: () => RNRestart.Restart(),
      },
    ],
    {cancelable: false},
  );
};

export default switchLanguage;
