import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type Props = {
	text: string;
};

const GoalItem: React.FC<Props> = props => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{props.text}</Text>
		</View>
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
