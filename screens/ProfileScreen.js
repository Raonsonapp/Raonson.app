import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const posts = [
  { id: '1', image: 'https://i.imgur.com/your_post.jpg' },
  { id: '2', image: 'https://i.imgur.com/your_post2.jpg' }
];

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: 'https://i.imgur.com/your_avatar.jpg' }} />
        <Text style={styles.username}>baqridinova</Text>
        <Text style={styles.bio}>Shuku ❤️</Text>
      </View>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image style={styles.postImage} source={{ uri: item.image }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { alignItems: 'center', padding: 10 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  username: { fontSize: 18, fontWeight: 'bold' },
  bio: { fontSize: 14, color: '#555' },
  postImage: { width: 120, height: 120, margin: 1 }
});

export default ProfileScreen;
