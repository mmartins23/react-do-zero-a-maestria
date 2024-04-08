import { useReducer, useState } from "react";

const HookUseReducer = () => {
    // 1- Starting with useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    }, 1)

    // 2- Advanced useReducer
    const initialTasks = [
        { id: 1, text: "Buy groceries" },
        { id: 2, text: "Walk Dog" },
    ];

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };

                setTaskText("");

                return [...state, newTask];

            case "REMOVE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTask({ type: "ADD" });
    };

    const removeTask = (id) => {
        dispatchTask({ type: "REMOVE", id: id });
    };
    return (
        <div>
            <h1>useReducer</h1>
            <p>Number: {number}</p>
            <button onClick={dispatch}>Change Number</button>
            <h3>Tasks:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTaskText(e.target.value)}
                    value={taskText}
                />
                <input type="submit" value="Add" />
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                        {task.text}
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default HookUseReducer;