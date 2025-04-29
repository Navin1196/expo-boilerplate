import { useAuthStore } from "@/store/authStore";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigation = useRouter();
  const handleLogout = () => {
    logout();
    navigation.replace("/login");
  };
  return (
    <View className="m-10 gap-2">
      <Text className="text-blue-700">Home</Text>
      <Link href="/features/[id]">Go to features</Link>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Welcome, {user?.email}
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          width: 120,
        }}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
