import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import RecordScreen from '../components/screens/RecordScreen';
import CalendarScreen from '../components/screens/CalendarScreen';
import SettingsScreen from '../components/screens/SettingsScreen';

const AppNavigation = () => {
  const [activeTab, setActiveTab] = useState('Calendar');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Record':
        return <RecordScreen />;
      case 'Calendar':
        return <CalendarScreen />;
      case 'Settings':
        return <SettingsScreen />;
      default:
        return <RecordScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>{renderScreen()}</View>

        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => setActiveTab('Record')}>
            <Text style={styles.tabText}>Re</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Calendar')}>
            <Text style={styles.tabText}>Ca</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Settings')}>
            <Text style={styles.tabText}>Se</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    height: 84,
    paddingHorizontal: 17,
    // borderWidth: 1,
  },
  tabText: {
    fontSize: 18,
    paddingTop: 16,
    paddingHorizontal: 30,
    height: 84,
    // borderWidth: 1,
  },
});

export default AppNavigation;
