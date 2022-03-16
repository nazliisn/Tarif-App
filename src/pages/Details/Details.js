import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard';
import useFecth from '../../components/Fecth/useFecth';

function Details({route}) {
  const idMeal = route.params;
  const {data} = useFecth(`${Config.API_URL}lookup.php?i=${idMeal}`);
  //https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

  const renderCategory = ({item}) => {
    return <DetailCard meal={item}></DetailCard>;
  };

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={data.meals}
        renderItem={renderCategory}
      />
    </SafeAreaView>
  );
}
export default Details;
