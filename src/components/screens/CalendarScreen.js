import React from 'react';
import {View, StyleSheet} from 'react-native';
import CalendarView from '../common/CalendarView';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <CalendarView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CalendarScreen;
