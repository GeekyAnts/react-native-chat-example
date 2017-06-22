import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { createUser, setToken } from "geek-chat";
import { Container, Content, Spinner } from "native-base";
import Login from "./login";
import ChatView from "./home";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoggedIn: false,
      token: "Token11", // Your App Token.
      userData: {}
    };
  }

  componentWillMount() {
    setToken("Token11");
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    AsyncStorage.getItem("userExists", (err, result) => {
      if (result === "true") {
        this.setState({ isLoggedIn: true });
        AsyncStorage.getItem("userData", (err, result) => {
          this.setState({
            userData: JSON.parse(result),
            isLoggedIn: true,
            isLoading: false
          });
        });
      } else {
        this.setState({ isLoading: false });
      }
    });
  }

  loginPress = async data => {
    const userData = {
      token: "Token11",
      uniqueKey: data.uniqueKey,
      displayName: data.displayName
    };
    const userDetails = await createUser(userData);
    if (userDetails) {
      const setData = await AsyncStorage.setItem(
        "userData",
        JSON.stringify(userDetails),
        async () => {
          await AsyncStorage.setItem("userExists", "true");
        }
      );
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Container
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Spinner />
        </Container>
      );
    }
    return this.state.isLoggedIn
      ? <ChatView userData={this.state.userData} />
      : <Login
          onPress={data => this.loginPress(data)}
          token={this.state.token}
        />;
  }
}
