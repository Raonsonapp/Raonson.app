import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import VerifiedBadge from '../components/VerifiedBadge';

export default function Profile() {
  const user = { name: 'Bakhritdinova Shukufta', verified: true, avatar: 'https://via.placeholder.com/150' };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.row}>
        <Text style={styles.name}>{user.name}</Text>
        {user.verified && <VerifiedBadge />}
      </View>
      <Text style={styles.bio}>This is a sample bio.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  name: { fontSize: 20, fontWeight: 'bold', marginRight: 5 },
  bio: { marginTop: 10, fontSize: 14, textAlign: 'center' },
});
