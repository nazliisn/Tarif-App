import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import useFecth from '../../components/Fecth/useFecth';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';
import styles from './Meals.style';

function Meals({route, navigation}) {
  const strCategory = route.params;
  const {data} = useFecth(`${Config.API_URL}filter.php?c=${strCategory}`);

  const handleSelect = idMeal => {
    return navigation.navigate('DetailsPages', idMeal);
  };

  const renderCategory = ({item}) => {
    return (
      <MealCard
        meal={item}
        onSelect={() => handleSelect(item.idMeal)}></MealCard>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={data.meals}
        renderItem={renderCategory}
      />
    </SafeAreaView>
  );
}
export default Meals;
