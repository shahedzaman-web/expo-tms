import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import AppScreen from '../components/AppScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
const HomeScreen = ({navigation}) => {
    return (
        <AppScreen>
            <SafeAreaView>
            <View style={{flexDirection:"row",marginHorizontal:20,justifyContent:"space-around"}}>
                <TouchableOpacity style={styles.card}
                onPress={() => navigation.navigate('Outlet')}>
                
                    <Image source={require('../assets/image/wallet-2.png')} style={{width:100,height:100}}/>
            <Text style={{fontWeight:"bold",textAlign:"center",}}>Outlet performance & Call Card</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.card}
                onPress={() => navigation.navigate("Communication")}
                >
                    <Image source={require('../assets/image/wallet.png')} style={{width:100,height:100}}/>
            <Text style={{fontWeight:"bold",textAlign:"center",}}>Communication</Text>

                </TouchableOpacity>
            </View>
            </SafeAreaView>
           
        </AppScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    card:{
        backgroundColor:'rgba(231, 76, 60, 0.2)',
        
        width: "45%",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        shadowOpacity:0.2,
        shadowOffset:{width:1,height:0.5},
        shadowRadius:10,
        elevation:5,

    }
})
