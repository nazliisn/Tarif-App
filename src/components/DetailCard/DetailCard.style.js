import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

    margin: 3,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  text_container: {
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  meal: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7f0000',
  },
  area: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#7f0000',
  },

  instruction: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  link_container: {
    margin: 7,
  },
});
