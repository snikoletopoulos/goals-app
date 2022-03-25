import {
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
	Pressable,
} from "react-native";

import { Goal } from "types/goal.type";

type Props = {
	goal: Goal;
	onPress: (goalId: Goal["id"]) => void;
};

const GoalItem: React.FC<Props> = props => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#210644" }}
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={props.onPress.bind(null, props.goal.id)}
			>
				<Text style={styles.goalText}>{props.goal.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

interface Styles {
	goalItem: ViewStyle;
	goalText: TextStyle;
	pressedItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
		overflow: "hidden",
	},

	pressedItem: {
		opacity: 0.5,
	},

	goalText: {
		padding: 8,
		color: "white",
	},
});
