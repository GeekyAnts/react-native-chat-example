import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { GeekChat, createUser, getToken, setToken } from "geek-chat";
import { Container } from "native-base";

export default (ChatView = props => {
  callMe = () => {
    console.log("Calling");
  };
  return (
    <Container>
      <GeekChat userData={props.userData} onBackPress={callMe} />
    </Container>
  );
});
