import React from 'react';
import { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

const CalendarView = () => {
  return (
    <View style={styles.container}>
      <CalendarHeader />
      <CalendarBody />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      width: Dimensions.get('window').width
    },
});

export default CalendarView;