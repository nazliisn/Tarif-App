import React,{useCallback} from "react";
import { Alert, Button, Linking ,StyleSheet} from "react-native";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
      await Linking.openURL(url);
   
  }, [url]);

  return <Button color="red"  title={children} onPress={handlePress} />;
};
export default OpenURLButton;



