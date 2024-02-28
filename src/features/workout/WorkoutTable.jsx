import Table from "../../ui/Table"
import WorkoutRow from "./WorkoutRow";

const exercises = [
    {
        id: 1,
        name: "Bench Press",
        tool: "Dumbbells",
        targetMuscle: "Full Chest",
        type: "Strength",
        level: "Intermediate",
        location: "Gym",
        category: "Chest",
        imageUrl: "path/to/bench-press-image.jpg" // Replace with actual image path
    },
    {
        id: 2,
        name: "Biceps Curl",
        tool: "Barbell",
        targetMuscle: "brachialis, brachii",
        type: "Strength",
        level: "Intermediate",
        location: "Gym",
        category: "Arms",
        imageUrl: "path/to/biceps-curl-image.jpg" // Replace with actual image path
    },
    {
        id: 3,
        name: "Ab Crunch",
        tool: "Body",
        targetMuscle: "Abdominal",
        type: "Bodyweight",
        level: "Beginner",
        location: "Home",
        category: "Core",
        imageUrl: "path/to/ab-crunch-image.jpg" // Replace with actual image path
    }
    // ... Add more exercise objects as needed
];


function WorkoutTable() {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2">exercise Details</th>
                    <th className="px-6 py-2">tool</th>
                    <th className="px-6 py-2">target muscle</th>
                    <th className="px-6 py-2">type</th>
                    <th className="px-6 py-2">level</th>
                    <th className="px-6 py-2">location</th>
                    <th className="px-6 py-2">Category</th>
                    <th className="px-6 py-2">Actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={exercises} render={(exercise) => <WorkoutRow exercise={exercise} key={exercise.id} />} />
            <Table.Footer />
        </Table>
    )
}

export default WorkoutTable
