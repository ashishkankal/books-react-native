import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class SplashHeader extends React.Component {
  render() {
    return (
      <View style={styles.SplashHeader}>
        <Text
          style={{
            fontSize: 36,
            textAlign: "center",
            opacity: 0.4,
            fontWeight: "600"
          }}
        >
          GUTENBERG PROJECT
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  SplashHeader: {
    //flex: 1,
    backgroundColor: "#ffb74d",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    paddingTop: 20
  }
});
