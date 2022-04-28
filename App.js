import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import uiClassFactory from "./ui/uiClassFactory";

import { debug } from "./debug";

const jsonData = {
  elements: [
    {
      id: "uiBlank",
    },
    {
      id: "uiN01",
    },
    {
      id: "uiS01",
      text1: "매일 밤 11시",
      text2: "수거가 시작됩니다.",
    },
    {
      id: "uiS02",
      text1: "수거: 9/19(월) 밤 11시",
      text2: "배송: 9/22(목) 아침 7시",
      buttonText: "변경",
      buttonTarget: "uiN01",
    },
    {
      id: "uiS03",
      imageUrl: "https://picsum.photos/400/200",
    },
    {
      id: "uiS01",
      text1: "이것은",
      text2: "테스트입니다.",
    },
  ],
};

let objectStorage = [];

///////////////////////////////////////////////////////////////////////////////////////////////////
// Main Routine
///////////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
  console.log("Rendering start");
  objectStorage = [];
  return <View style={styles.container}>{processScreen()}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Process routine
///////////////////////////////////////////////////////////////////////////////////////////////////
function processScreen() {
  const returnData = [];

  // Analysis UI JSON data and populate object instances
  jsonData.elements.forEach(function (element) {
    debug("-->" + element.id, element);
    let classObject = uiClassFactory(element.id);
    let myInstance = new classObject(element, objectStorage);
    objectStorage.push({ id: element.id, object: myInstance });
  });

  // Render them
  objectStorage.forEach(function (element) {
    returnData.push(element.object.render());
  });

  return returnData;
}
