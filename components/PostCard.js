import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { truncateText } from '../src/utils/helpers';
import VerifiedBadge from './VerifiedBadge';
import { dubVideo } from '../src/utils/dubbing';

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.title}>{truncateText(post.title, 50)}</Text>
        {post.verified && <VerifiedBadge />}
      </View>
      <Text style={styles.desc}>{truncateText(post.description, 100)}</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Like</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Download</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => dubVideo(post.video)}><Text style={styles.buttonText}>Dub</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8, elevation: 3 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  desc: { fontSize: 14, marginTop: 5 },
  button: { marginTop: 10, backgroundColor: '#00f', padding: 8, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
});
