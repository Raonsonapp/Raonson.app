import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const dummyResults = [
  { id: '1', name: 'Movie 1' },
  { id: '2', name: 'Series 1' },
];

export default function Search() {
  const [query, setQuery] = useState('');

  const filtered = dummyResults.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
