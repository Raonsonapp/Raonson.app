import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ReelItem from '../components/ReelItem';
import Header from '../components/Header';

const dummyReels = [
  { id: '1', title: 'Reel 1', thumbnail: 'https://placekitten.com/400/300' },
  { id: '2', title: 'Reel 2', thumbnail: 'https://placekitten.com/401/300' },
];

export default function Reels() {
  return (
    <View style={styles.container}>
      <Header title="Reels" />
      <FlatList
        data={dummyReels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReelItem reel={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f5f5f5' } });
