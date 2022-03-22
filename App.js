import { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// REACT-NAVIGATION
const Stack = createNativeStackNavigator();

// VIEWS
import Login from "./views/Login";
import Home from "./views/Home";

// CONTEXT
export const UserContext = createContext();

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [email, setEmail] = useState("");

	const value = {
		isLoggedIn,
		setLoggedIn,
		email,
		setEmail,
	};

	return (
		<UserContext.Provider value={value}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
					<Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserContext.Provider>
	);
}
