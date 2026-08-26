import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Hello native wind react native...!
      </Text>
      {/* <Link href= "/calculator" className="mt-4 rounded bg-primary text-white p-4 ">Calculator</Link> */}
      <Link href= "/onboarding" className="mt-4 rounded bg-primary text-white p-4 ">Go to Onboarding</Link>
      <Link href= "/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4 ">Go to Sign In</Link>
      <Link href= "/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4 ">Go to Sign Up</Link>

      <Link href= "/subscriptions/spotify" >SpotifySubscriptions</Link>
      <Link 
        href={{
              pathname: "/subscriptions/[id]",
              params: { id: "claude" },  
        }} 
        >Claude MaxSubscriptions</Link>
    </View>
  );
}