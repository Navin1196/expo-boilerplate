import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";
import "../global.css";

const RootLayout = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen name="login" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default RootLayout;
