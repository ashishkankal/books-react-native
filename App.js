import { createStackNavigator } from "react-navigation";
import SearchScreen from "./SearchScreen";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import HomeScreen from "./HomeScreen";
import { Provider } from "react-redux";
import reducer from "./reducer";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Search: {
    screen: SearchScreen
  }
});
const store = createStore(
  reducer,
  compose(applyMiddleware(ReduxPromise, thunk))
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
