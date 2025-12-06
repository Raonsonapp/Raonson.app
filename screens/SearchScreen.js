import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const users = [
  { id: '1', username: 'shuku', avatar: 'https://i.imgur.com/your_avatar.jpg' },
  { id: '2', username: 'baqri', avatar: 'https://i.imgur.com/your_avatar2.jpg' }
];

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput style={styles.input} placeholder="Search" />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.user}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 10 },
  user: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 }
});

export default SearchScreen;
