import { useState } from "react";
import {
	StyleSheet,
	ViewStyle,
	View,
	FlatList,
	Alert,
	Button,
} from "react-native";

import { Goal } from "app/types/goal.type";
import { StatusBar } from "expo-status-bar";

import GoalItem from "components/GoalItem";
import GoalInput from "components/GoalInput";

const App: React.FC = () => {
	const [courseGoal, setCourseGoal] = useState<Goal[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleAddGoal = (goalText: Goal["text"]) => {
		if (!goalText) {
			Alert.alert("No empty goal allowed", "Please enter a goal");
			return;
		}

		setCourseGoal(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), text: goalText },
		]);

		toggleModal();
	};

	const handleGoalDelete = (goalId: Goal["id"]) => {
		setCourseGoal(currentGoals =>
			currentGoals.filter(goal => goal.id !== goalId)
		);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Button title="Add New Goal" color="#5e0acc" onPress={toggleModal} />
			<GoalInput
				onAddGoal={handleAddGoal}
				visible={isModalVisible}
				onCancel={toggleModal}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					keyExtractor={goal => goal.id}
					alwaysBounceVertical={false}
					data={courseGoal}
					renderItem={itemData => (
						<GoalItem goal={itemData.item} onPress={handleGoalDelete} />
					)}
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
