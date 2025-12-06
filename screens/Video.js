import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'react-native-video';

export default function VideoScreen({ route }) {
  const { videoUrl } = route.params;
  return (
    <View style={styles.container}>
      <Video source={{ uri: videoUrl }} style={styles.video} controls resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  video: { width: '100%', height: '100%' },
});
