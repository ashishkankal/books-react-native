import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class GenereList extends React.Component {
  render() {
    return <View style={styles.GenreList}>{this.props.children}</View>;
  }
}
const styles = StyleSheet.create({
  GenreList: {
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  }
});
