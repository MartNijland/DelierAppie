import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Svg from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";

import LoginSVG from "../assets/images/misc/login/login.svg";

import { useFonts } from "expo-font";

const Home = () => {
  const [loaded, error] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12'
  });

  console.log('-------');
  console.log(loaded, error);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <LoginSVG width={300} height={300} />
      </View>
      <Text
        style={{
          fontFamily: "Inter-SemiBoldItalic",
          fontSize: 28,
          fontWeight: "500",
          color: "#333",
          marginBottom: 30,
        }}
      >
        Loginabcd
      </Text>
    </SafeAreaView>
  );
};

export default Home;
