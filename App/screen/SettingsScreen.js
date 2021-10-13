import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import AppScreen from '../components/AppScreen'
import AppTitle from '../components/AppTitle'
import colors from '../config/colors'

const SettingsScreen = () => {
    const [viewChangePass, setViewChangePass] = useState(false);
    return (
        <AppScreen>
            <SafeAreaView>
            <AppTitle title="Settings" />
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{flexDirection: "row",alignItems:"center",justifyContent: "space-between"}}>
                    <Text style={styles.text}>
                        Select Language
                    </Text>
                    <Text  style={styles.optionText}>Bangla</Text>
                    <Text  style={styles.optionText}>English</Text>
                    </View>
                


                </View>
                <View style={styles.card}>
                    <View style={styles.spaceBetween}>
                    <Text style={styles.text}>
                        Change Password
                    </Text>
                    <TouchableOpacity
                    onPress={()=>setViewChangePass(prevState => !prevState)}
                    >
                    <Text>{viewChangePass ? "-" : "+"}</Text>
                    </TouchableOpacity>
                    
                    </View>
                    {
                        viewChangePass && (
                            <View style={styles.passContainer}>
                             <Text style={styles.smallText}>
                                Old Password
                            </Text>
                            <TextInput
                            placeholder="Old Password"
                            style={styles.input}
                            />
                             <Text style={styles.smallText}>
                                New Password
                            </Text>
                            <TextInput
                            placeholder="New Password"
                            style={styles.input}
                            />
                               <Text style={styles.smallText}>
                                Confirm Password
                            </Text>
                            <TextInput
                            placeholder="Confirm Password"
                            style={styles.input}
                            />
                            <TouchableOpacity
                            style={styles.button}
                            >
                            <Text style={styles.buttonText}>
                                Change Password
                            </Text>
                            </TouchableOpacity>
                            </View>
                        )
                    }

                </View>
                </View>
            </SafeAreaView>
           
           
        </AppScreen>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {

        margin: 20,
    },
    card: {
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,

    },text:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "600", 

    },optionText:{
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },box:{
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
    },passText:{
      
        fontSize: 16,
        fontWeight: "600",
    },spaceBetween:{
        flexDirection: "row",
        justifyContent: "space-between",
    },passContainer:{
        padding: 20,
    },smallText:{
        color: "#fff",
        fontSize: 14,
        fontWeight: "500", 
    },input:{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,

    },buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center"
    },button:{
        backgroundColor: "#dc3540",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,

    }
})
