import React from "react";
import { View, Text } from "react-native";

import { Surface } from "react-native-paper";

import {
  sectionSubHeadingBox,
  sectionSubHeadingText,
  subTabScreenContainer,
  surfaceInfoCards,
} from "../../styles";

const Monthly = (props) => {
  return (
    <View style={subTabScreenContainer}>
      <View style={sectionSubHeadingBox}>
        <Text style={sectionSubHeadingText}>Monthly Reports</Text>
      </View>

      <Surface style={surfaceInfoCards}>
        <Text>Title</Text>
        <Text>Subtitle</Text>
        <Text>Announcement Information</Text>
      </Surface>

      <Surface style={surfaceInfoCards}>
        <Text>Title</Text>
        <Text>Subtitle</Text>
        <Text>Announcement Information</Text>
      </Surface>

      <Surface style={surfaceInfoCards}>
        <Text>Title</Text>
        <Text>Subtitle</Text>
        <Text>Announcement Information</Text>
      </Surface>
    </View>
  );
};

export default Monthly;
