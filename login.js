import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { GeekChat, createUser, getToken, setToken } from "geek-chat";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Button,
  Body,
  Footer,
  Form,
  Item,
  Input,
  Label,
  FooterTab
} from "native-base";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueKey: "",
      displayName: ""
    };
  }

  render() {
    return (
      <Container style={{ marginTop: 22 }}>
        <Header>
          <Left />
          <Body>
            <Text>Login</Text>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Form style={{ alignSelf: "stretch" }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={text => this.setState({ uniqueKey: text })}
                style={{ paddingLeft: 5 }}
                value={this.state.uniqueKey}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Display Name</Label>
              <Input
                onChangeText={text => this.setState({ displayName: text })}
                style={{ paddingLeft: 5 }}
                value={this.state.displayName}
              />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.props.onPress(this.state)}>
              <Text>Login</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
