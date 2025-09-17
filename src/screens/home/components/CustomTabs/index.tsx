import React, {useState} from 'react';
import {View, TouchableOpacity, TextStyle} from 'react-native';
import AppText from '../../../../components/atoms/AppText';
import {useThemeStore} from '../../../../zustand/useThemeStore';
import {generateStyles} from './styles';

import {CustomTabsProps} from '../../types';

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  initialActiveTab,
  onTabChange,
}) => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);

  const [activeTab, setActiveTab] = useState(
    initialActiveTab || tabs[0]?.id || '',
  );

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tabButton,
              activeTab === tab.id && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(tab.id)}>
            <AppText
              style={[
                styles.tabText,
                // @ts-ignore
                activeTab === tab.id && (styles.activeTabText as TextStyle),
              ]}>
              {tab.label}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>

      {activeTabContent && (
        <View style={styles.contentContainer}>{activeTabContent}</View>
      )}
    </View>
  );
};

export default CustomTabs;
