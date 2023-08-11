import { useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Text, SafeAreaView } from "react-native";

export default function Splash({ navigation, route }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate("Login");
        }, 1500);
        return () => clearTimeout(timeout);
    });
    return (
        <SafeAreaView style={style.container}>
            {/* logo image here */}
            <Image
                // source={{uri : "https://ui-avatars.com/api/?name=EV&background=068FFF&color=FFF&bold=true&size=248&rounded=true"}}
                source={require("../assets/icon-splash.png")}
                style={{
                    width: 300,
                    height: 200,
                    resizeMode: "contain",
                    // borderWidth: 1,
                    // marginBottom: 20,
                }}
            />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 24,
                marginBottom: 30,
            }}>Owner App</Text>
            <ActivityIndicator animating={true} size="large" />
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
});