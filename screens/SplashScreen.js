import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { LogBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "../assets/Style";

LogBox.ignoreAllLogs();

const SplashScreen = (props) => {
  const [authLoaded, setAuthLoaded] = useState(false);

  const user = useSelector((state) => state.users.value);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      if (user.token) {
        props.navigation.replace("HomeScreen");
      } else {
        props.navigation.replace("MailScreen");
      }
    }
  }, [authLoaded, props.navigation]);

  return (
    <SafeAreaView style={styles.savSplashScreen}>
      <StatusBar backgroundColor={"#0046CF"} style={"light"} />

      <View style={styles.loadingContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/contags-HR-white-logo-transparent-background.png")}
          />
        </View>
        <View style={styles.loaderContainer}>
          <Image
            style={styles.loader}
            source={require("../assets/loader-no-bg.gif")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
