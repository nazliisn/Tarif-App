import React from "react";
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import styles from './CategoryCard.style'

function CategoryCard({category,onSelect}){

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
            <Image style={styles.image} source={{uri: category.strCategoryThumb}}/>
            <View style={styles.text_container}>
            <Text style={styles.strCategory}>{category.strCategory}</Text>

            </View>
        </View>

        </TouchableWithoutFeedback>
        

    )
}

export default CategoryCard;