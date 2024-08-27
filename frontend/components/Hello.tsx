import { View, Text } from "react-native";
import { HelloWave } from "./HelloWave";

type userProps = {
  name: string;
};
export const Hello = (props: userProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <HelloWave />
      <Text>{`Hello, ${props.name}!`}</Text>
    </View>
  );
};
