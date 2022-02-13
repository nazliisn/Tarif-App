import React from 'react';
import {SafeAreaView,FlatList} from 'react-native'
import CategoriesCard from "../../components/CategoryCard";
import useFecth from "../../components/Fecth/useFecth";
import Config from "react-native-config";
import styles from './Categories.style'



function Categories({navigation}){
    const {data}=useFecth(`${Config.API_URL}categories.php`) ;

    const handleSelect=(strCategory)=>{
        console.log(strCategory);
        return navigation.navigate("MealsPages",strCategory)

    }  

    const renderCategory = ({item})=>{       
        
        return <CategoriesCard category={item} onSelect={()=>handleSelect(item.strCategory)} />
    }    

    return(
        <SafeAreaView style={styles.container} >
              <FlatList
            keyExtractor={item => item.idCategory}
            data={data.categories}
            renderItem={renderCategory}
            />          

            
        </SafeAreaView>

    )
}
export default Categories;