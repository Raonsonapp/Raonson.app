import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Username</Text>
      <Text style={styles.bio}>This is the user bio.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  bio: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 5 },
});
