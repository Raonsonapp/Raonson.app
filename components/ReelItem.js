import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { dubVideo } from '../src/utils/dubbing';

export default function ReelItem({ reel }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: reel.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{reel.title}</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Play</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => dubVideo(reel.video)}><Text style={styles.buttonText}>Dub</Text></TouchableOpacity>
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
