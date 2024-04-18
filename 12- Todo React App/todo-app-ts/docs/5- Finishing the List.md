# Finishing the List

To explain how the list is finished, let's break down the steps involved in the code:

### Step 1: Import Necessary Dependencies and Interfaces

```typescript
import { ITask } from "../interfaces/Task";
import styles from "./TaskList.module.css";
import { BsPencil, BsTrash } from "react-icons/bs";
```

- We import the `ITask` interface from the `../interfaces/Task` file.
- We import CSS styles from the `TaskList.module.css` file to apply styles to the component.
- We import icons (`BsPencil` and `BsTrash`) from the `react-icons/bs` library for editing and deleting tasks.

### Step 2: Define Props Interface for `TaskList`

```typescript
interface Props {
    taskList: ITask[];
}
```

- We define an interface `Props` specifying that the `TaskList` component expects a prop `taskList` which is an array of tasks (`ITask[]`).

### Step 3: Create `TaskList` Component

```typescript
const TaskList = ({ taskList }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>

                        <div className={styles.actions}>
                            <i><BsPencil /></i>
                            <i><BsTrash /></i>
                        </div>
                    </div>
                ))
            ) : (
                <p>Não há tarefas cadastradas!</p>
            )}
        </>
    )
}
```

### Step 4: Explanation:

1. **Rendering Task List**:
   - We map through the `taskList` array and render each task inside a `<div>` element.
   - Each task `<div>` has a unique `key` attribute set to the `id` of the task to help React efficiently update the list.

2. **Task Details**:
   - Inside each task `<div>`, we display the task title (`task.title`) and its difficulty level (`task.difficulty`).
   - The task details are wrapped inside a `<div>` with the class `details`, which applies styles from the CSS module.

3. **Task Actions (Icons)**:
   - We render icons for editing and deleting tasks using `BsPencil` and `BsTrash` icons from the `react-icons/bs` library.
   - The icons are wrapped inside a `<div>` with the class `actions`, which applies styles from the CSS module.

4. **Conditional Rendering**:
   - If the `taskList` is empty, we display a message "Não há tarefas cadastradas!" (No tasks registered).

### Step 5: CSS Styling

- CSS styles are applied to the task list, details, and actions to give them a structured layout and appearance.

### Step 6: Export `TaskList` Component

```typescript
export default TaskList;
```

- We export the `TaskList` component to make it available for import in other files.

This `TaskList` component displays each task's title and difficulty level, along with icons for editing and deleting tasks, if the task list is not empty. If the task list is empty, it displays a message indicating no tasks are registered.