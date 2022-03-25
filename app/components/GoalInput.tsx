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
						<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add goal" onPress={handleAddGoal} color="#b180f0" />
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
		padding: 16,
		borderBottomWidth: 1,
		backgroundColor: "#311b6b",
	},

	image: {
		width: 100,
		height: 100,
		margin: 20,
	},

	textInput: {
		width: "100%",
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		borderWidth: 1,
		padding: 16,
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
