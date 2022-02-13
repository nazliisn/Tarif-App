import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './DetailCard.style'
import OpenUrl from '../Link'

function DetailCard({meal}){
   

    
    return(
        
            <View style={styles.container}>
            <View style={styles.text_container}>
                
            <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
            <Text style={styles.meal}>{meal.strMeal}</Text>
            <Text style={styles.area}>{meal.strArea}</Text>
            </View>

            <Text style={styles.instruction}>{meal.strInstructions}</Text>
            <View style={styles.link_container}>
            <OpenUrl style={styles.button} url={meal.strYoutube} >Watch on Youtube</OpenUrl>

            </View>

            

        </View>


        

    )
}

export default DetailCard;