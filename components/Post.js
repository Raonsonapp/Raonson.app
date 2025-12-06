import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ user, image, likes }) => (
  <View style={styles.container}>
    <Text style={styles.user}>{user}</Text>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text>❤️ {likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>💬 Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>🔗 Share</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  user: { fontWeight: 'bold', paddingHorizontal: 10, marginBottom: 5 },
  image: { width: '100%', height: 300 },
  footer: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 }
});

export default Post;
