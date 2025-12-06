import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';
import Header from '../components/Header';

const dummyPosts = [
  { id: '1', title: 'Post 1', description: 'Description 1', image: 'https://placekitten.com/400/200' },
  { id: '2', title: 'Post 2', description: 'Description 2', image: 'https://placekitten.com/401/200' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f5f5f5' } });
