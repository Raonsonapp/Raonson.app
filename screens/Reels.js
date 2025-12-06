import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ReelItem from '../components/ReelItem';

const dummyReels = [
  { id: 1, title: 'Reel 1', thumbnail: 'https://via.placeholder.com/400', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, title: 'Reel 2', thumbnail: 'https://via.placeholder.com/400', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

export default function Reels() {
  return (
    <View style={styles.container}>
      <FlatList data={dummyReels} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <ReelItem reel={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
