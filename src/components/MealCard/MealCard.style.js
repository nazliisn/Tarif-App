import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({

    container:{
        flex:1,
        margin:5,
     
        
        
        
    },
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/3, 
        borderRadius:40,
        resizeMode:"contain",
     

        
        
    },
    text_container:{
        flex:1,
        justifyContent:'flex-end',
        

        


    },
    
    strMeal:{
        
        fontSize:30,
        marginRight:20,
        padding:10,
        fontWeight:'bold',
        color:'white',
        textAlign:'right',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
        
       
    }

})