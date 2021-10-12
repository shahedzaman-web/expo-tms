import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppScreen from "../components/AppScreen";
import AppTitle from "../components/AppTitle";

import colors from "../config/colors";

const data = [
  {
    id: 1,
    title: "Lorem ipsum",
  },
  {
    id: 2,
    title: "Lorem ipsum dsfdsfsfds",
  },
];

const PushNotificationScreen = () => {
  return (
    <AppScreen>
      <SafeAreaView>
        <AppTitle title="Push Notification" />
        <View style={styles.notificationContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </AppScreen>
  );
};

export default PushNotificationScreen;

const styles = StyleSheet.create({
  notificationContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  item: {
    marginVertical: 10,
    padding: 8,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
});
