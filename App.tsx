import {
	StyleSheet,
	Text,
	TextStyle,
	ViewStyle,
	View,
	Button,
	TextInput,
} from "react-native";

import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Your course goal!" />
				<Button title="Add goal" onPress={() => {}} />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
};

export default App;

interface Styles {
	container: ViewStyle;
	inputContainer: ViewStyle;
	textInput: TextStyle;
	goalsContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},

	textInput: {
		width: "70%",
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		marginRight: 8,
	},

	goalsContainer: {
		flex: 5,
	},
});
