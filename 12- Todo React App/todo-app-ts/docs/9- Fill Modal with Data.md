# Fill Modal with Data

To explain how filling the modal with data is done, let's break down the steps involved in the code:

### Step 1: Define Props Interface for `TaskForm`

```typescript
interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
}
```

- We define an interface `Props` specifying the props expected by the `TaskForm` component.
- The `task` prop is optional and represents the task data to be filled in the form for editing.

### Step 2: Use `useEffect` Hook to Fill Form Data

```typescript
useEffect(() => {
  if (task) {
    setId(task.id);
    setTitle(task.title);
    setDifficulty(task.difficulty);
  }
}, [task]);
```

- We use the `useEffect` hook to run a function when the `task` prop changes.
- If a `task` is provided (not `null`), we update the state variables `id`, `title`, and `difficulty` with the task data.

### Step 3: Pass `taskToUpdate` State to `Modal` Component

```typescript
const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
```

- We define a state variable `taskToUpdate` to hold the task data that needs to be edited.

### Step 4: Update `editTask` Function in the `App` Component

```typescript
const editTask = (task: ITask): void => {
  hideOrShowModal(true);
  setTaskToUpdate(task);
}
```

- We update the `editTask` function to set the `taskToUpdate` state with the task data passed as an argument.
- This function is called when the edit icon is clicked in the `TaskList` component, triggering the modal to show and filling the form with the selected task data.

### Step 5: Pass `taskToUpdate` State to `TaskForm` Component in the `Modal`

```typescript
<Modal children={
  <TaskForm 
    btnText="Editar Tarefa" 
    taskList={taskList}
    task={taskToUpdate}
  />
}/>
```

- We pass the `taskToUpdate` state to the `TaskForm` component as the `task` prop within the `Modal` component.
- This ensures that the `TaskForm` component receives the task data to be filled in the form for editing.

### Summary:

By following these steps, the `TaskForm` component is filled with data for editing when the modal is displayed. The `useEffect` hook updates the form data whenever the `task` prop changes. When the user clicks the edit icon in the `TaskList` component, the `editTask` function sets the `taskToUpdate` state with the selected task data, triggering the modal to show with the form filled with the task details for editing.