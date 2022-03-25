import { useState } from "react";
import {
	StyleSheet,
	Text,
	TextStyle,
	ViewStyle,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
} from "react-native";

import { Goal } from "app/types/goal.type";
import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
	const [text, setText] = useState("");
	const [courseGoal, setCourseGoal] = useState<Goal[]>([]);

	const handleAddGoal = () => {
		setCourseGoal(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), text: text },
		]);
		setText("");
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.inputContainer}>
				<TextInput
					value={text}
					onChangeText={setText}
					style={styles.textInput}
					placeholder="Your course goal!"
				/>
				<Button title="Add goal" onPress={handleAddGoal} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					keyExtractor={goal => goal.id}
					alwaysBounceVertical={false}
					data={courseGoal}
					renderItem={itemData => (
						<View style={styles.goalItem}>
							<Text style={styles.goalText}>{itemData.item.text}</Text>
						</View>
					)}
				/>
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
	goalItem: ViewStyle;
	goalText: TextStyle;
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

	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,

		backgroundColor: "#5e0acc",
	},

	goalText: {
		color: "white",
	},
});
