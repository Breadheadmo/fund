import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { COLORS } from '../constants/colors';

const LogoPlaceholder = () => {
  return (
    <View style={styles.logoContainer}>
      <Text h1 style={styles.logoText}>FY</Text>
      <Text style={styles.logoSubtext}>Fund Youth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  logoSubtext: {
    fontSize: 20,
    color: COLORS.secondary,
    marginTop: -5,
  },
});

export default LogoPlaceholder;