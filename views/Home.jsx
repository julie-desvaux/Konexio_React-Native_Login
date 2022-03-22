import { useState, useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

// CONTEXT
import { UserContext } from "../App";

export default function Home({ navigation }) {
	const context = useContext(UserContext);

	const handleClick = () => {
		context.setEmail("");
		context.setLoggedIn(false);
		navigation.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome!</Text>
			<Button title="Logout" onPress={handleClick} />
		</View>
	);
}

// CSS PART

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		fontSize: 60,
	},
});
