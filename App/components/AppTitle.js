import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const AppTitle = ({title}) => {
    return (
        <View
        style={styles.container}
        >
        
            <TouchableOpacity>
                <Text> - </Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity><Text>N</Text></TouchableOpacity>
            <TouchableOpacity><Text>N</Text></TouchableOpacity>
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
        marginBottom:10
        

    },title:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.primary
    }
})
