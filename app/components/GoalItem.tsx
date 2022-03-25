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
		<Pressable onPress={props.onPress.bind(null, props.goal.id)}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{props.goal.text}</Text>
			</View>
		</Pressable>
	);
};

export default GoalItem;

interface Styles {
	goalItem: ViewStyle;
	goalText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
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
