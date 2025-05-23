import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Features = () => {
  return (
    <View className="m-10 h-full gap-2">
      <Text className="text-blue-700">Features</Text>
      <Link href="/biometricLogin">Biometric Login Test</Link>
      <Link href="/cameraTest">Camera Test</Link>
      <Link href="/mapsTest">Maps Test</Link>
    </View>
  );
};

export default Features;
