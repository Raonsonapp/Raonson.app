import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function PrayerTimes({ city }) {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const res = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=YOUR_COUNTRY`);
        setTimes(res.data.data.timings);
      } catch (err) { console.log(err); }
    };
    fetchTimes();
  }, [city]);

  return (
    <View style={styles.container}>
      {Object.keys(times).map(key => <Text key={key}>{key}: {times[key]}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({ container: { padding: 10, backgroundColor: '#fff', borderRadius: 8 } });
