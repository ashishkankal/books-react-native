import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
export default class GenereListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.GenereListItem, this.props.style && this.props.style]}
        onPress={this.props.onPress}
        activeOpacity={1}
      >
        <Text style={{ fontSize: 14 }}>{this.props.name.toUpperCase()}</Text>
        {!this.props.header && <Icon name="chevron-right" />}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  GenereListItem: {
    //flex: 1,
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 25,
    borderWidth: 0.5,

    borderColor: "#d6d7da",
    //alignItems: "space-between",
    justifyContent: "space-between",
    alignContent: "center",
    height: 44
    //textTransform: "uppercase"
  }
});
