import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from '@rneui/themed';
import { LinearProgress } from '@rneui/themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';

type DonationScreenProps = {
  navigation: StackNavigationProp<any>;
};

const DonationScreen: React.FC<DonationScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h1 style={styles.headerText}>fundYouth</Text>
      </View>

      <Card containerStyle={styles.targetCard}>
        <Text style={styles.targetTitle}>Monthly Target</Text>
        <Text style={styles.targetAmount}>R50 000</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Current Progress: 95%</Text>
          <LinearProgress
            value={0.95}
            color={COLORS.secondary}
            variant="determinate"
            style={styles.progressBar}
          />
        </View>
      </Card>

      <Card containerStyle={styles.storiesCard}>
        <Text style={styles.storiesTitle}>Stories</Text>
        {[1, 2].map((item) => (
          <View key={item} style={styles.storyItem}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View style={styles.storyContent}>
              <Text style={styles.storyPreview}>
                I need help with new stationary, I am a girl...
              </Text>
              <Text 
                style={styles.fullStoryButton}
                onPress={() => navigation.navigate('StoryDetails')}
              >
                Full Story
              </Text>
            </View>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  headerText: {
    color: COLORS.secondary,
    fontSize: 24,
  },
  targetCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 20,
    margin: 15,
  },
  targetTitle: {
    color: COLORS.primary,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  targetAmount: {
    color: COLORS.primary,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginTop: 15,
  },
  progressText: {
    color: COLORS.primary,
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  storiesCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    borderWidth: 0, // Add this to remove default border
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  storiesTitle: {
    color: COLORS.primary,
    fontSize: 20,
    marginBottom: 15,
  },
  storyItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  storyContent: {
    flex: 1,
  },
  storyPreview: {
    color: COLORS.secondary,
    marginBottom: 5,
  },
  fullStoryButton: {
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
});

export default DonationScreen;