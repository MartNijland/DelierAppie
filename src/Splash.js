import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import splashAnimation from "../assets/splash.json";

export default class Splash extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
        }}
      >
        <LottieView
          source={splashAnimation}
          autoPlay
          loop={false}
          speed={0.9}
          onAnimationFinish={() => {
            this.props.navigation.replace("Home");
          }}
        />
      </View>
    );
  }
}
