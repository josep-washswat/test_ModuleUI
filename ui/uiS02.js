import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";
import { debug } from "../debug";

export class uiS02 extends Component {
  constructor(jsonData, objectStorage) {
    super(jsonData);
    this.state = {
      text1: jsonData.text1,
      text2: jsonData.text2,
      buttonText: jsonData.buttonText,
      targetObjectName: jsonData.buttonTarget,
      objectStorage: objectStorage,
    };
  }

  style = StyleSheet.create({
    main: {
      backgroundColor: "green",
      fontSize: 40,
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      height: 120,
      width: "100%",
    },
  });

  handlePress() {
    let target = this.state.targetObjectName;
    // let objectStorage = this.state.objectStorage;
    // Alert.alert("inside clicked:" + this.state.buttonText);
    this.state.objectStorage.forEach(function (element) {
      if (element.id == target) {
        element.object.process("test");
      }
    });
  }

  render() {
    return (
      <View Key="UI_S02" style={this.style.main}>
        <Text>{this.state.text1}</Text>
        <Text>{this.state.text2}</Text>
        <Button
          title={this.state.buttonText}
          onPress={() => this.handlePress()}
        />
      </View>
    );
  }
}
