import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function VerifiedBadge() {
  return <Image source={require('../assets/images/verified_badge.png')} style={styles.badge} />;
}

const styles = StyleSheet.create({ badge: { width: 20, height: 20 } });
