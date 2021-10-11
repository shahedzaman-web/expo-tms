import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import colors from "../config/colors";

const DrawerContains = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            borderTopEndRadius: 30,
            
          }}
        >
  <View style={{alignItems:"center"}}>
  <Image
            source={require("../assets/image/proPic.png")}
            style={styles.image}
          />

          <Text style={styles.text}>Mr Hasan</Text>

          <Text style={styles.subText}>TMS</Text>
  </View>
          <View style={[styles.line,styles.mt12]} />
          <Text style={styles.textDes}>Region</Text>
          <View style={[styles.line,styles.mt12]} />
          <Text style={styles.textDes}>Area</Text>
          <View style={[styles.line,styles.mt12]} />
          <Text style={styles.textDes}>Teritoty</Text>
          <View style={[styles.line,styles.mt12]} />
          <Text style={styles.textDes}>Total Allocatated outlet</Text>
          <View style={[styles.line,styles.mt12]} />
          <Text style={styles.textDes}>DOB</Text>
          <View style={[styles.line,styles.mt12]} />
          <Text style={styles.textDes}>Cell No</Text>
          <View style={[styles.line,styles.mt12]} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DrawerContains;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    width: "100%",

  },
  line: {
    width: 280,
    height: 0.5,

    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#fff",
  },textDes:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 12
  },mt12:{
    marginTop:12
  }
});
