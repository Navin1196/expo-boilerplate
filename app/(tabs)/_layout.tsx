import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="features/[id]"
        options={{
          headerTitle: "Features",
          title: "Features",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
