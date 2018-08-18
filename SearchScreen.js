import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import {
  fetchAndSetBooks,
  fetchMoreBooks,
  searchAndSetBooks
} from "./network/actions";
import _ from "lodash";
import { connect } from "react-redux";
import Book from "./components/Book";
import BookList from "./components/BookList";
import InfiniteScroll from "react-native-infinite-scroll";
import ResultCount from "./components/ResultCount";
import { clearBooks } from "./reducer/Books";
class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "" };
    this.searchBooks = _.debounce(this.searchBooks, 1000);
  }
  static navigationOptions = {
    title: "Home",
    header: null
  };
  componentDidMount() {
    const { navigation } = this.props;
    const topic = navigation.getParam("Topic", "");
    const { searchString } = this.state;

    this.props.fetchAndSetBooks({ topic, search: searchString });
  }
  componentWillUnmount() {
    this.props.clearBooks();
  }
  loadMorePage = () => {
    const { books, fetchMoreBooks } = this.props;
    const { NextUri } = books;
    if (NextUri) {
      fetchMoreBooks(NextUri);
    }
  };

  searchBooks = () => {
    const { fetchAndSetBooks, navigation, books } = this.props;
    const { searchString } = this.state;

    const topic = navigation.getParam("Topic", "");
    fetchAndSetBooks({ search: searchString, topic });
  };
  render() {
    const { books, navigation } = this.props;
    const { Data = [], NextUri, loading } = books;
    const Topic = navigation.getParam("Topic", "");
    return (
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => this.props.navigation.goBack()}
          reverse
          color="#fff"
          containerStyle={{
            alignSelf: "flex-end",
            position: "absolute",
            backgroundColor: "#ffb74d",
            bottom: 25,
            left: 25,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            height: 50,
            width: 50,
            borderRadius: 50
          }}
        />
        <SearchBar
          showLoading
          round
          platform="android"
          placeholder="Search"
          containerStyle={styles.searchBarContainer}
          inputStyle={{ backgroundColor: "#fff" }}
          keyboardType="web-search"
          onChangeText={searchString => {
            this.setState({ searchString });
            this.searchBooks();
          }}
          icon={{ style: { marginTop: 20 } }}
          clearIcon={{ style: { marginTop: 20 } }}
        />
        {Topic && (
          <Text
            style={{
              padding: 10,
              textAlign: "center",
              backgroundColor: "#ccc"
            }}
          >
            {Topic}
          </Text>
        )}
        {!loading || books.DataCount > 0 ? (
          <ResultCount count={books.DataCount} loading={loading} />
        ) : (
          <ActivityIndicator
            color="#e65100"
            size="large"
            animating={true}
            style={{ marginBottom: 10 }}
          />
        )}

        <InfiniteScroll
          horizontal={false}
          onLoadMoreAsync={this.loadMorePage}
          distanceFromEnd={50}
        >
          <BookList style={styles.BookList}>
            {Data.map((item, index) => (
              <Book
                key={item.id}
                {...item}
                bookStyle={
                  (index + 1) % 2 === 0
                    ? styles.bookEvenChild
                    : styles.bookOddChild
                }
              />
            ))}
          </BookList>
          {NextUri !== null ? (
            <ActivityIndicator
              color="#e65100"
              size="large"
              animating={true}
              style={{ marginBottom: 10 }}
            />
          ) : !loading && books.DataCount > 0 ? (
            <Text
              style={{
                padding: 10,
                textAlign: "center",
                color: "#999"
              }}
            >
              Thats all Folks !
            </Text>
          ) : null}
        </InfiniteScroll>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
    // alignItems: "center",
    // justifyContent: "center"
  },

  bookEvenChild: {},
  bookOddChild: {},

  searchBarContainer: {
    paddingTop: 20,
    position: "relative",
    backgroundColor: "#ffb74d",
    borderBottomWidth: 0,
    paddingBottom: 10
  },
  contentContainer: {
    paddingVertical: 20
  }
});
const stateToProps = state => {
  return { books: state.books };
};
const actionCreators = {
  fetchAndSetBooks,
  fetchMoreBooks,
  searchAndSetBooks,
  clearBooks
};
export default connect(
  stateToProps,
  actionCreators
)(SearchScreen);
