import { Text, View, ScrollView, TextInput } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { Hello } from "@/components/Hello";
export default function Index() {
  return (
    <ScrollView>
      <Hello name="Euclides"/>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d3d3d3",
        }}
      >
        <Text>What are you looking for?</Text>

        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
        ></TextInput>
      </View>
    </ScrollView>
  );
}
