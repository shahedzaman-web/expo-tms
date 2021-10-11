import React from 'react'
import { StyleSheet, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Screen from './Screen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import colors from '../config/colors'

const AppScreen = ({children}) => {
    const navigation = useNavigation()
    return (
        <Screen>
            <View
                style={styles.container}
            >
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.toggleDrawer()}
                >
                    <Image
                        source={require('../assets/image/Vector.png')} 
                        style={styles.image}
                    />
                   
                </TouchableOpacity>
            </View>
           <View>{children}</View>
        </Screen>
    )
}

export default AppScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        top: hp("50%"),
        left:0,
        justifyContent:'center',
        alignItems:'center',

    },button:{
        width:28,
        height:30,
        backgroundColor:colors.primary,
        borderTopEndRadius:wp("10%"),
        borderBottomEndRadius:wp("10%"),
        justifyContent:'center',
        alignItems:'center',
    }
})
