import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/slices/yearSlice';

const CalendarHeader = (props) => {
  const year = useSelector((state) => state.year);
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => dispatch(increment(1))} />
      <Text>{year}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default CalendarHeader;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20
  },
});