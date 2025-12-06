import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const reels = [
  { id: '1', user: 'shuku', video: 'https://i.imgur.com/your_video.mp4' },
  { id: '2', user: 'baqri', video: 'https://i.imgur.com/your_video2.mp4' }
];

const ReelsScreen = () => {
  return (
    <FlatList
      data={reels}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.reel}>
          <Text style={styles.user}>{item.user}</Text>
          <Image source={{ uri: 'https://i.imgur.com/your_video_placeholder.jpg' }} style={styles.video} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  reel: { marginBottom: 20 },
  user: { color: 'white', fontWeight: 'bold', position: 'absolute', top: 10, left: 10, zIndex: 1 },
  video: { width: '100%', height: 400, backgroundColor: '#000' }
});

export default ReelsScreen;
