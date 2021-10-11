import React from 'react'
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import Screen from '../components/Screen'
import colors from "../config/colors"
const LoginScreen = ({navigation}) => {
    const handleLogin=()=>{
        navigation.replace("Drawer")
    }
    return (
        <Screen>
    <View style={styles.container}>
        <Image 
        source={require('../assets/image/Logo.png')}
        style={{width:200,height:200,alignSelf:'center'}}
        />
            <Text
            style={styles.appName}
            >TMS APP</Text>
        <TextInput
        placeholderTextColor="gray"
        style={styles.input}
        placeholder="Email address"
        />
           <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder="Password"
        />
        <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
       >
           <Text
           style={styles.buttonText}
           >Login</Text>

       </TouchableOpacity>
        </View>
        </Screen>
    
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        height:"100%"
    },
    appName: {
        fontSize: 40,
        fontWeight: '400',
       marginVertical:12,
        textAlign: 'center',
        color: colors.primary
    },input:{
        borderWidth:1,
        borderColor:colors.primary,
        padding:16,
        marginVertical:10,
        borderRadius:50,
        alignSelf:'center',
        backgroundColor:'#fff',
        width:320,
        height:50,
      
    },button:{
        backgroundColor:colors.primary,
        borderRadius:10,
        marginVertical:10,
        alignSelf:'center',
        width:320,
        alignItems:'center',
        justifyContent:'center',
        height:50
    },buttonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'

    }
})
