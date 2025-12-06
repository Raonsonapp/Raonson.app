import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import Story from '../components/Story';
import Post from '../components/Post';

const stories = [
  { id: '1', user: 'shuku', image: 'https://i.imgur.com/your_story.jpg' },
  { id: '2', user: 'baqri', image: 'https://i.imgur.com/your_story2.jpg' }
];

const posts = [
  { id: '1', user: 'shuku', image: 'https://i.imgur.com/your_post.jpg', likes: 12 },
  { id: '2', user: 'baqri', image: 'https://i.imgur.com/your_post2.jpg', likes: 45 }
];

const HomeScreen = () => {
  return (
    <ScrollView>
      <FlatList
        data={stories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Story user={item.user} image={item.image} />}
        style={{ marginVertical: 10 }}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post user={item.user} image={item.image} likes={item.likes} />}
      />
    </ScrollView>
  );
};

export default HomeScreen;
