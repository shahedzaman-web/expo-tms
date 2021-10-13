import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import AppMenu from './AppMenu';

const AppTitle = ({title}) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigation=useNavigation()
    return (
        <View
        style={styles.container}
        >
        
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
                <Text> - </Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            ><Text>N</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={() =>setShowMenu(prevState=>!prevState) }
            ><Text>N</Text></TouchableOpacity>
            <View>
                {
                    showMenu && <AppMenu/>
                }
            </View>
            </View>
           
        </View>
    )
}

export default AppTitle

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:10,
        marginBottom:10,
        position:"relative",
        zIndex:1

    },title:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.primary
    }
})
