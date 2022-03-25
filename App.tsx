import { useState } from "react";
import { StyleSheet, ViewStyle, View, FlatList } from "react-native";

import { Goal } from "app/types/goal.type";
import { StatusBar } from "expo-status-bar";

import GoalItem from "components/GoalItem";
import GoalInput from "components/GoalInput";

const App: React.FC = () => {
	const [courseGoal, setCourseGoal] = useState<Goal[]>([]);

	const handleAddGoal = (goalText: Goal["text"]) => {
		setCourseGoal(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), text: goalText },
		]);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<GoalInput onAddGoal={handleAddGoal} />
			<View style={styles.goalsContainer}>
				<FlatList
					keyExtractor={goal => goal.id}
					alwaysBounceVertical={false}
					data={courseGoal}
					renderItem={itemData => <GoalItem text={itemData.item.text} />}
				/>
			</View>
		</View>
	);
};

export default App;

interface Styles {
	container: ViewStyle;
	goalsContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
});
