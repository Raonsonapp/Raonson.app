import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Story({ story }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: story.image }} style={styles.image} />
      <Text style={styles.name}>{story.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginHorizontal: 5 },
  image: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#00f' },
  name: { marginTop: 5, fontSize: 12, textAlign: 'center' },
});
