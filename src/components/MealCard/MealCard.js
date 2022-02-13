import React from "react";
import {View,Text,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import styles from './MealCard.style'

function MealCard({meal,onSelect}){

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: meal.strMealThumb}} >
            <View style={styles.text_container}>
            <Text style={styles.strMeal}>{meal.strMeal}</Text>
            </View>
            </ImageBackground>            
        </View>
        </TouchableWithoutFeedback>        

    )
}

export default MealCard;