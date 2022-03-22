import { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

// CONTEXT
import { UserContext } from "../App";

export default function Login({ navigation }) {
	const context = useContext(UserContext);

	const emailRegex = /^\S+@\S+\.\S+$/;

	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = () => {
		if (emailRegex.test(context.email) && password.length > 5) {
			context.setLoggedIn(true);
			navigation.navigate("Home");
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				value={context.email}
				onChangeText={context.setEmail}
				placeholder="Your email"
				style={styles.input}
				accessibilityLabel="Your email"
				keyboardType="email-address"
			/>
			<TextInput
				value={password}
				onChangeText={setPassword}
				placeholder="Your password"
				style={styles.input}
				secureTextEntry
				accessibilityLabel="Your password"
			/>
			{/* {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>} */}
			<Button title="Login" onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		height: 40,
		width: "50%",
		backgroundColor: "lightgrey",
		padding: 10,
		margin: 5,
	},
	errorMsg: {
		color: "crimson",
		fontWeight: "bold",
		textAlign: "center",
	},
});
