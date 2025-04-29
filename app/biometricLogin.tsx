import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { authenticateWithBiometrics } from "../utils/biometrics";

const BiometricLogin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleBiometricAuth = async () => {
    const success = await authenticateWithBiometrics();
    if (success) {
      setIsAuthenticated(true);
      Alert.alert("Success", "Biometric authentication successful!");
    } else {
      Alert.alert("Error", "Biometric authentication failed.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{isAuthenticated ? "Authenticated!" : "Not Authenticated"}</Text>
      <Button title="Login with Biometrics" onPress={handleBiometricAuth} />
    </View>
  );
};

export default BiometricLogin;
