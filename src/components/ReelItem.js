import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ReelItem({ reel }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: reel.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{reel.title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  thumbnail: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 16, marginTop: 5, fontWeight: 'bold' },
  button: { marginTop: 5, backgroundColor: '#00f', padding: 8, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
});
