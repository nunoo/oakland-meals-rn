import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is our Meal Detail Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
