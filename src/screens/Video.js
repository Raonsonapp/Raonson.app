import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Video() {
  return (
    <View style={styles.container}>
      <Text>Video Screen (add video player here)</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center' } });
