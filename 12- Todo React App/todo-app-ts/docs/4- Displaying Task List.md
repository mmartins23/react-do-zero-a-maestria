# Displaying Task List

Sure, let's break down how the code displays the task list step by step:

### Step 1: Define Props Interface for `TaskList`

```typescript
interface Props {
    taskList: ITask[];
}
```

- We define an interface `Props` to specify the props expected by the `TaskList` component.
- `taskList`: An array of tasks (`ITask[]`) representing the list of tasks.

### Step 2: Create `TaskList` Component

```typescript
const TaskList = ({ taskList }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id}>
                        <p>{task.title}</p>
                    </div>
                ))
            ) : (
                <p>Não há tarefas cadastradas!</p>
            )}
        </>
    )
}
```

### Step 3: Explanation:

1. **Rendering Task List**:
   - We render the task list using JSX. If `taskList` has elements (`taskList.length > 0`), we map through each task and render a `<div>` element for each task.
   - Each task `<div>` has a `key` attribute set to the `id` of the task to help React efficiently update the list.
   - Inside each `<div>`, we render a `<p>` element with the title of the task (`task.title`).

2. **Conditional Rendering**:
   - If `taskList` is empty (`taskList.length === 0`), we render a paragraph (`<p>`) with the message "Não há tarefas cadastradas!" (No tasks registered).

### Step 4: Import and Use `TaskList` in `App` Component

```typescript
import TaskList from "./components/TaskList";
```

- We import the `TaskList` component into the `App` component.

```typescript
<div>
  <h2>Suas tarefas:</h2>
  <TaskList taskList={taskList}/>
</div>
```

- We render the `TaskList` component, passing the `taskList` state as a prop to display the list of tasks.

### Summary:

- The `TaskList` component receives a list of tasks (`taskList`) as a prop.
- It renders each task's title inside `<p>` elements within `<div>` elements.
- If the task list is empty, it displays a message indicating no tasks are registered.
- In the `App` component, the `TaskList` component is imported and rendered with the `taskList` state passed as a prop, displaying the list of tasks.