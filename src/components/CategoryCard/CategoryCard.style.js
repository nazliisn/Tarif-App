import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#ede7f6',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  text_container: {
    justifyContent: 'center',
    marginLeft: 25,
  },
  strCategory: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
