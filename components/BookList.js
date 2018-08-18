import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class BookList extends React.Component {
  render() {
    return <View style={styles.BookList}>{this.props.children}</View>;
  }
}
const styles = StyleSheet.create({
  BookList: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
});
