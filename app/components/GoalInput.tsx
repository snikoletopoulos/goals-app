import { useState } from "react";
import {
	Button,
	StyleSheet,
	TextInput,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";

import { Goal } from "types/goal.type";

type Props = {
	onAddGoal: (goalText: Goal["text"]) => void;
};

const GoalInput: React.FC<Props> = props => {
	const [text, setText] = useState("");

	const handleAddGoal = () => {
		props.onAddGoal(text);
		setText("");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={text}
				onChangeText={setText}
				style={styles.textInput}
				placeholder="Your course goal!"
			/>
			<Button title="Add goal" onPress={handleAddGoal} />
		</View>
	);
};

export default GoalInput;

interface Styles {
	inputContainer: ViewStyle;
	textInput: TextStyle;
}

const styles = StyleSheet.create<Styles>({
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
});
