import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text} from 'react-native';

function useFecth(url) {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const {data: response} = await axios.get(url);
      setData(response);
    } catch (error) {
      <Text>{error.message}</Text>;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {data};
}
export default useFecth;
