import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashHeader from "./components/SplashHeader";
import GenereList from "./components/GenreList";
import GenereListItem from "./components/GenreListItem";
import { fetchAndSetBooks } from "./network/actions";
import { connect } from "react-redux";

const genreData = [
  { id: 1, name: "Fiction" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Humor" },
  { id: 4, name: "Politics" },
  { id: 5, name: "Philosophy" },
  { id: 6, name: "History" },
  { id: 7, name: "Adventure" }
];
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    header: null
  };

  render() {
    const { books = {} } = this.props;

    return (
      <View style={styles.container}>
        <SplashHeader />
        <GenereList>
          {/* <GenereListItem name={"Select a Topic"} header style={styles.topic} /> */}
          {genreData.map(item => (
            <GenereListItem
              key={item.id}
              {...item}
              onPress={() =>
                this.props.navigation.navigate("Search", { Topic: item.name })
              }
            />
          ))}
        </GenereList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  topic: {
    marginBottom: 10
  }
});
const stateToProps = state => {
  return { books: state.books };
};
const actionCreators = {
  fetchAndSetBooks
};
export default connect(
  stateToProps,
  actionCreators
)(HomeScreen);
