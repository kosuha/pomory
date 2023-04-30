import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/slices/yearSlice';
import { setMonth } from '../../store/slices/monthSlice';

const CalendarHeader = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = useSelector((state) => state.year);
  const month = useSelector((state) => state.month);
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      {/* <Button title="Increment" onPress={() => dispatch(increment(1))} /> */}
      <Text style={styles.top}>{year}</Text>
      <View style={styles.bottom}>
        <Text style={styles.monthText}>{months[month]}</Text>
        <Text style={styles.icon}>(Icon)</Text>
      </View>
      {/* <Button title="Decrement" onPress={() => dispatch(decrement())} /> */}
    </View>
  );
}

export default CalendarHeader;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingLeft: 20,
  },
  top: {
    fontSize: 18,
    fontWeight: '700',
  },
  bottom: {
    flexDirection: 'row',
  },
  monthText: {
    fontSize: 30,
    fontWeight: '700'
  },
  icon: {
    margin: 10,
    borderWidth: 1,

  }
});