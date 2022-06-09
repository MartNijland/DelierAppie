import { AppRegistry } from "react-native";
import Main from './src/Main';
import { name as appName } from './app.json';

AppRegistry.registerComponent('main', () => Main);

// import React from 'react';
// import { Text, View } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';

// export default props => {
//   let [fontsLoaded] = useFonts({
//     'Inter-Black': require('./assets/fonts/InterBlack.otf'),
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontFamily: 'Inter-Black', fontSize: 40 }}>Inter Black</Text>
//       <Text style={{ fontSize: 40 }}>Platform Default</Text>
//     </View>
//   );
// };
