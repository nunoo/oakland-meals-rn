import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.route.params.categoryId;
    const category = CATEGORIES.find(cat => cat.id === catId);
    
    return (
        <View style={styles.screen}>
            <Text>This is my Meal Category Screen!</Text>
            <Text>{category.title}</Text>
            <Button title="Go To Meal Details" onPress={()=> props.navigation.navigate("Meal Details")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150
    }

});

export default CategoryMealsScreen;