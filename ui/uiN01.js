import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";

export class uiN01 extends Component {
  constructor(jsonData, objectStorage) {
    super(jsonData);
    this.state = {
      buttonText: "Back Button",
    };
  }

  style = StyleSheet.create({
    main: {
      backgroundColor: "brown",
      alignItems: "flex-start",
      justifyContent: "center",
      height: 50,
      width: "100%",
    },
  });

  process(stringData) {
    console.log("N01, process");
    Alert.alert("N01 processed received: " + stringData);
    this.state.buttonText = stringData;
    this.setState({});
  }

  render() {
    console.log("N01,render");
    return (
      <View Key="UI_N01" style={this.style.main}>
        <Text>{this.state.buttonText}</Text>
      </View>
    );
  }
}
