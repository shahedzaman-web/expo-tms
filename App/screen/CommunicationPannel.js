import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


import AppScreen from "../components/AppScreen";
import AppTitle from "../components/AppTitle";
import colors from "../config/colors";

const CommunicationPannel = () => {
  const video = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState({});
  const [modalItem, setModalItem] = useState({});

  const handleView = (item) => {
    setModalVisible((prevState) => !prevState), setModalItem(item);
  };

  const data = [
    {
      id: 1,
      title: "Test Campaign NW",
      time: "23 Sep 2021_10:15am",
      type: "photo",
      brand: "801-Navy",
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Offer Campaign ",
      time: "23 Sep 2021_10:15am",
      type: "photo",
      brand: "802-Navy",
      image: "https://picsum.photos/200",
    },
    {
      id: 3,
      title: "Test Campaign NW",
      time: "23 Sep 2021_10:15am",
      type: "video",
      brand: "801-Navy",
      video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
  ];

  return (
    <AppScreen>
      <SafeAreaView>
        <AppTitle title="Communication Pannel" />
        <View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.title}>{index + 1}.</Text>
                  <View>
                    {item.type == "photo" && (
                      <View style={styles.viewContainer}>
                        <Image
                          source={{ uri: item.image }}
                          style={styles.image}
                        />
                      </View>
                    )}
                  </View>
                  <View>
                    {item.type == "video" && (
                      <View style={styles.viewContainer}>
                        <Video
                          ref={video}
                          style={styles.video}
                          source={{
                            uri: item.video,
                          }}
                          useNativeControls
                          resizeMode="contain"
                          isLooping
                          onPlaybackStatusUpdate={(status) =>
                            setStatus(() => status)
                          }
                        />
                      </View>
                    )}
                  </View>
                  <View style={{ width: wp("45%") }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.brand}>{item.brand}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => handleView(item)}
                    >
                      {item.type == "photo" ? (
                        <Text style={styles.buttonText}>View</Text>
                      ) : (
                        <Text style={styles.buttonText}>Play</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        {modalItem.type == "photo" ? (
                          <Image
                            source={{ uri: modalItem.image }}
                            style={{ width: wp("80%"), height: hp("50%") }}
                          />
                        ) : (
                          <Video
                            ref={video}
                            style={{ width: wp("80%"), height: "80%" }}
                            source={{
                              uri: modalItem.video,
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={(status) =>
                              setStatus(() => status)
                            }
                          />
                        )}
                        <TouchableOpacity
                          style={{
                            ...styles.openButton,
                            backgroundColor: colors.primary,
                          }}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
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

export default CommunicationPannel;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("100%"),
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "gray",
    paddingVertical: 5,
  },
  brand: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
  },
  viewContainer: {
    width: wp("30%"),
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalView: {
    margin: 20,
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 10,
    height: hp("60%"),
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginTop: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
