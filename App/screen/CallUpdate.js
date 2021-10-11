import React from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image } from "react-native";
import AppScreen from "../components/AppScreen";
import AppTitle from "../components/AppTitle";
import colors from "../config/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const CallUpdate = () => {
  return (
    <AppScreen>
      <AppTitle title="Call Update" />
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.boxText}>PCM Maintenance</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: wp("30%"),
            }}
          >
            <Text style={{ color: colors.primary, fontWeight: "600" }}>
              Yes
            </Text>
            <Text style={{ color: colors.primary, fontWeight: "600" }}>No</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.boxText}>Price Compliance maintenance</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: wp("30%"),
            }}
          >
            <Text style={{ color: colors.primary, fontWeight: "600" }}>
              Yes
            </Text>
            <Text style={{ color: colors.primary, fontWeight: "600" }}>No</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.boxText}>Visibility item maintenance</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: wp("30%"),
            }}
          >
            <Text style={{ color: colors.primary, fontWeight: "600" }}>
              Yes
            </Text>
            <Text style={{ color: colors.primary, fontWeight: "600" }}>No</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.bigTextBox}>
            <Text style={[styles.boxText,styles.textCenter]}>Stock Availability</Text>
            <Text style={{ fontWeight: "500",fontSize:12,textAlign: "center" }}>(if yes Entry count)</Text>
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-around" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: wp("58%"),
                alignItems: "center",
                paddingVertical:4
              }}
            >
              <Text style={{ fontWeight: "500" ,fontSize:12}}>Brand Name</Text>
              <Text style={{ color: colors.primary, fontWeight: "600" ,fontSize:12}}>
                Yes
              </Text>
              <Text style={{ color: colors.primary, fontWeight: "600",fontSize:12 }}>
                No
              </Text>
              <View style={styles.smallTextBox}>
                <Text style={{fontSize:12,color:"gray"}}>Entry Show</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: wp("58%"),
                alignItems: "center",
                paddingVertical:4
              }}
            >
              <Text style={{ fontWeight: "500" ,fontSize:12}}>Brand Name</Text>
              <Text style={{ color: colors.primary, fontWeight: "600" ,fontSize:12}}>
                Yes
              </Text>
              <Text style={{ color: colors.primary, fontWeight: "600",fontSize:12 }}>
                No
              </Text>
              <View style={styles.smallTextBox}>
                <Text style={{fontSize:12,color:"gray"}}>Entry Show</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={styles.commentBox}>
              <Text style={styles.commentText}>Comment</Text>
      </View>
        <TextInput
            style={styles.textInput}
            placeholder="Write your comment here & click Submit"
            placeholderTextColor="gray"
            multiline={true}
            numberOfLines={4}
            />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20}}>
                <TouchableOpacity style={styles.card}
                onPress={() => navigation.navigate('Outlet')}>
                
                    <Image source={require('../assets/image/cam.png')} style={{width:80,height:80}}/>
            <Text style={{fontWeight:"bold",textAlign:"center",}}>Capture Photo</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../assets/image/wallet.png')} style={{width:80,height:80}}/>
            <Text style={{fontWeight:"bold",textAlign:"center",}}>Communication</Text>

                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row-reverse"}}>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>Submit</Text>
                </TouchableOpacity>
            </View>
      </View>
    </AppScreen>
  );
};

export default CallUpdate;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  textBox: {
    backgroundColor: colors.primary,
    padding: 10,
    width: wp("65%"),
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bigTextBox: {
    backgroundColor: colors.primary,
    padding: 12,
    width: wp("36%"),
  },
  smallTextBox: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 6,
    
  },textCenter:{
    textAlign:"center"
  },commentBox:{
      backgroundColor: colors.primary,
        padding: 6,
        width: wp("25%"),
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
  },commentText:{
    color:"#fff",
    fontWeight: "bold",
    textAlign:"center"
    },textInput:{
        borderWidth: 1,
        borderColor: colors.primary,
        height: hp("10%"),  
        padding: 10,       
    }, card:{
        backgroundColor:'rgba(231, 76, 60, 0.2)',
        borderWidth: 1,
        borderColor: colors.primary,

        width: "45%",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        shadowOpacity:0.2,
        shadowOffset:{width:1,height:0.5},
        shadowRadius:10,
        elevation:5,

    },submitBtn:{
        backgroundColor:colors.primary,
        padding:10,
        borderRadius:10
    }
});
