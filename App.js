import React from "react";
import { StyleSheet, Text, View } from "react-native";
import store from "./src/redux/Store";
import { Provider } from "react-redux";
import Todos from "./src/components/Todos";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Todos />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0b0b0",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
