import React from 'react';
import { useState } from "react";
import { StyleSheet, View } from "react-native";
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
    },
});

export default CalendarView;