import React from 'react'
import { StyleSheet,View,ImageBackground } from 'react-native'


const Screen = ({children}) => {
    return (
        <ImageBackground style={styles.backgroundImage}
        source={require('../assets/image/background.png')}>

        <View
        >
        {children}
        </View>
            
        </ImageBackground>
    )
}

export default Screen

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        
    }
})
