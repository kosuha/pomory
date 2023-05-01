import React from 'react';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import { getFirstDayOfMonth, getLastDayOfMonth } from '../../util/util'

const CalendarBody = (props) => {
//   const [yearModalVisible, setYearModalVisible] = useState(false);
  const year = useSelector((state) => state.year);
  const month = useSelector((state) => state.month);
  const dispatch = useDispatch();

  const weekdays = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ]

  const days = () => {
    const firstDay = getFirstDayOfMonth(year, month);
    const lastDay = getLastDayOfMonth(year, month);
    console.log(firstDay.getDay());
    console.log(lastDay.getDate());

    const weekArray = [];
    for (let i = 0; i < 6; i++) {
      const dayArray = [];
      for (let j = 0; j < 7; j++) {
        dayArray.push(
          <View style={styles.day}>
            <Text>{i * 7 + j}</Text>
          </View>
        );  
      }
      weekArray.push(
        <View style={styles.week}>
          { dayArray }
        </View>
      );
    }
    
    return (
      <View style={styles.days}>
        { weekArray }
      </View>
    )
  }

  
  return (
    <View>
      <View style={styles.weekdays}>
        {
          weekdays.map((content) => 
            <Text style={styles.weekday}>{content}</Text>
          )
        }
      </View>
      { days() }
    </View>
  );
}

export default CalendarBody;

const styles = StyleSheet.create({
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    borderWidth: 1,
  },
  weekday: {
    fontSize: 12,
    fontWeight: '500',
    width: 50,
    margin: 1,
    textAlign: 'center',
    borderWidth: 1,
  },
  day: {
    borderWidth: 1,
    width: 50,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  week: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
  },
  days: {
    borderWidth: 1,
  },

});