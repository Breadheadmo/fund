import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';

type StoryDetailsProps = {
  navigation: StackNavigationProp<any>;
};

const StoryDetails: React.FC<StoryDetailsProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h1 style={styles.headerText}>fundYouth</Text>
      </View>

      <View style={styles.contentCard}>
        <View style={styles.titleSection}>
          <Text style={styles.titleLabel}>Title: </Text>
          <Text style={styles.titleText}>Education</Text>
        </View>

        <View style={styles.storySection}>
          <Text style={styles.storyLabel}>Story</Text>
          <Text style={styles.storyText}>
            I need help with new stationary, I am a girl from Thokoza who loves Debating at school and captain of my netball team. I live with my grand mother and 3 siblings our mother works in Cape Town as a factory worker and she is not able to put food for all of us on the table sometimes.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            buttonStyle={styles.cancelButton}
            containerStyle={styles.buttonWrapper}
          />
          <Button
            title="Fund Directly"
            buttonStyle={styles.fundButton}
            containerStyle={styles.buttonWrapper}
          />
        </View>
      </View>
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
  contentCard: {
    backgroundColor: COLORS.primary,
    margin: 15,
    padding: 20,
    borderRadius: 15,
  },
  titleSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleLabel: {
    fontSize: 18,
    color: COLORS.secondary,
  },
  titleText: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  storySection: {
    marginBottom: 30,
  },
  storyLabel: {
    fontSize: 18,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  storyText: {
    fontSize: 16,
    color: COLORS.secondary,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonWrapper: {
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#FFA500',
    borderRadius: 25,
    paddingVertical: 12,
  },
  fundButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingVertical: 12,
  },
});

export default StoryDetails;