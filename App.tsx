import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {RootStack} from './src/navigation';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/utils/lang/i18n';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  const detectLang = async () => {
    try {
      const savedLang = await AsyncStorage.getItem('appLanguage');
      // Only change to LTR if English is explicitly saved
      if (savedLang === 'en') {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
      }
      // RTL is already set as default in index.js, no need to set it again
    } catch (e) {
      // On error, keep the default RTL from index.js
    }
  };

  useLayoutEffect(() => {
    detectLang();
  }, []);

  return (
    <View style={{flex: 1}}>
      <I18nextProvider i18n={i18n}>
        <RootStack />
      </I18nextProvider>
    </View>
  );
}

export default App;
