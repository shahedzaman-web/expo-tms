import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppScreen from '../components/AppScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppTitle from "../components/AppTitle";
import colors from "../config/colors";

const OutletScreen = ({ navigation }) => {
  const [viewBrand, setViewBrand] = useState(false);
  const [viewSales, setViewSales] = useState(false);

  const handleBrandView = () => {
    setViewBrand((preState) => !preState);
    setViewSales(false);
  };
  const handleDailySalesView = () => {
    setViewSales((preState) => !preState);
    setViewBrand(false);
  };

  return (
    <AppScreen>
      <SafeAreaView>
        <ScrollView>
          <AppTitle title="Outlet Performance & Call Card" />
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500" }}>Outline Name</Text>
              <View style={styles.textBox}>
                <Text style={{ color: "gray" }}>Dhaka</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500" }}>Outline Code</Text>
              <View style={styles.textBox}>
                <Text style={{ color: "gray" }}>10001</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500" }}>Retailer Name</Text>
              <View style={styles.textBox}>
                <Text style={{ color: "gray" }}>Mr. Hasan</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500" }}>Retailer Number</Text>
              <View style={styles.textBox}>
                <Text style={{ color: "gray" }}>+880 1777 112233</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500" }}>Retailer Address</Text>
              <View style={styles.textBox}>
                <Text style={{ color: "gray" }}>Mirpur,Dhaka</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500" }}>Deployed PCM</Text>
              <View style={styles.textBox}>
                <Text style={{ color: "gray" }}>PCM</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.titleText}>Performance Dashboard</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.titleText}>Focus Volume</Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("CallUpdate")}
              >
                <Text style={styles.btnText}>Call Card</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <Text style={styles.titleText}>Brand Split</Text>
                <TouchableOpacity
                  style={styles.detailsBtn}
                  onPress={handleDailySalesView}
                >
                  <Text style={styles.detailsText}>
                    {viewSales ? "-" : "+"}
                  </Text>
                </TouchableOpacity>
              </View>
              {viewSales && (
                <View style={styles.detailsView}>
                  <Text>details</Text>
                </View>
              )}
            </View>
            <View style={styles.card}>
              <View style={styles.spaceBetween}>
                <Text style={styles.titleText}>Daily Sales Trend</Text>
                <TouchableOpacity
                  style={styles.detailsBtn}
                  onPress={handleBrandView}
                >
                  <Text style={styles.detailsText}>
                    {viewBrand ? "-" : "+"}
                  </Text>
                </TouchableOpacity>
              </View>
              {viewBrand && (
                <View style={styles.detailsView}>
                  <Text>details</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AppScreen>
  );
};

export default OutletScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  textBox: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 5,
    borderRadius: 5,
    width: wp("50%"),
    backgroundColor: "#fff",
  },
  card: {
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.primary,
    padding: 5,
  },
  btnView: {
    flexDirection: "row-reverse",
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 12,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
  },
  spaceBetween: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  detailsBtn: {
    backgroundColor: "#ffd",
  },
  detailsText: {
    padding: 2,
  },
});
