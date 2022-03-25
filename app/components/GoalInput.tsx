import { useState } from "react";
import {
	Button,
	StyleSheet,
	TextInput,
	TextStyle,
	View,
	ViewStyle,
	Modal,
	Image,
	ImageStyle,
} from "react-native";

import { Goal } from "types/goal.type";

type Props = {
	onAddGoal: (goalText: Goal["text"]) => void;
	visible: boolean;
	onCancel: () => void;
};

const GoalInput: React.FC<Props> = props => {
	const [text, setText] = useState("");

	const handleAddGoal = () => {
		props.onAddGoal(text);
		setText("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("assets/images/goal.png")}
					style={styles.image}
				/>
				<TextInput
					value={text}
					onChangeText={setText}
					style={styles.textInput}
					placeholder="Your course goal!"
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add goal" onPress={handleAddGoal} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

interface Styles {
	inputContainer: ViewStyle;
	image: ImageStyle;
	textInput: TextStyle;
	buttonContainer: ViewStyle;
	button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},

	image: {
		width: 100,
		height: 100,
		margin: 20,
	},

	textInput: {
		width: "100%",
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 8,
	},

	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},

	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
