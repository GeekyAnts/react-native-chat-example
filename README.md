An example app for [react-native-chat](https://github.com/GeekyAnts/react-native-chat) 
Just install the app update your token in app and start using it. 

##Steps

### 1. git clone `https://github.com/GeekyAnts/react-native-chat-example.git`
### 2. cd react-native-chat-example
### 3. npm install / yarn [whichever you prefer].
### 4. update your token. Follow steps on the [Website](react-native-chat.com) to generate your Token.
```
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoggedIn: false,
      token: "Your App Token", // Your App Token.
      userData: {}
    };
  }

  componentWillMount() {
    // AsyncStorage.clear();
    setToken("Your App Token");
  }

```

### 5. npm run ios / npm start [whichever you prefer].
