import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ResultCount extends Component {
  render() {
    const { loading, count } = this.props;
    return (
      <View style={styles.result}>
        {count === 0 ? (
          <Text>No results found</Text>
        ) : (
          <Text>Showing {count} results</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  result: {
    backgroundColor: "#fff",
    // height: 20,
    // flex: 1,
    padding: 10,
    alignItems: "center"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
