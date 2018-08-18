import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
const MAX_LIMIT = 35;
export default class Book extends React.Component {
  render() {
    const { name, image, bookStyle, link, author } = this.props;
    return (
      <TouchableOpacity
        style={StyleSheet.flatten([bookStyle, styles.Book])}
        onPress={
          link
            ? () => Linking.openURL(link)
            : () => alert("No viewable version available")
        }
        activeOpacity={1}
      >
        <Image
          style={{ width: "100%", height: 200, borderRadius: 4 }}
          source={{
            uri: image
          }}
        />
        <View style={styles.caption}>
          <Text style={styles.bookName}>
            {name.length > MAX_LIMIT
              ? name.substring(0, MAX_LIMIT - 3) + "..."
              : name}
          </Text>
          <Text style={styles.authorName}>{author ? author : "--"}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  Book: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    flexBasis: "50%",
    // height: 200,
    //position: "relative",
    borderBottomWidth: 0,
    borderColor: "#ccc"
  },
  caption: {
    //position: "absolute",
    marginTop: 5,
    bottom: 0,
    left: 0,
    right: 0
  },
  bookName: { fontSize: 10 },
  authorName: {
    color: "#999",
    fontSize: 8
  }
});
