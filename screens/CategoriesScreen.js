import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const renderCatItems = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Meal Types', {
            categoryId: itemData.item.id,
            title: itemData.item.title,
          })
        }
        style={styles.gridItems}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderCatItems} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItems: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: 'lightgrey',
  },
});

export default CategoriesScreen;
