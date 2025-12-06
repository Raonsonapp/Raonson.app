import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Story = ({ user, image }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.username}>{user}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginHorizontal: 5 },
  image: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#2ecc71' },
  username: { fontSize: 12, marginTop: 4 }
});

export default Story;
