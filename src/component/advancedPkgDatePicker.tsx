import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
function FunAdvancedDatePicker() {
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <DatePicker
        date={date}
        onDateChange={setDate}
        style={{
          height: 20,
          borderWidth: 1,
          padding: 20,
          margin: 40,
        }}
      />
    </View>
  );
}
export default FunAdvancedDatePicker;
