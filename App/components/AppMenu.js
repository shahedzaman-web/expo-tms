import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      >
        <Text style={styles.btnText}> Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.button}>
      <Text style={styles.btnText}> Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppMenu;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 60,
    backgroundColor: colors.primary,
    position: "absolute",
    right: 0,
    zIndex: 100,
    top: 16,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },btnText:{
    color: "#fff",
  },button:{
      paddingVertical:4
  }
});
