# Finishing Update

To explain how the code finishes updating the task, let's break down the steps involved:

### Step 1: Define Props Interface for `TaskForm`

```typescript
interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}
```

- We define an interface `Props` specifying the props expected by the `TaskForm` component.
- The `handleUpdate` function is optional and is responsible for updating the task in the list.

### Step 2: Modify `addTaskHandler` Function in `TaskForm`

```typescript
const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (handleUpdate) {
    handleUpdate(id, title, difficulty); // If handleUpdate function is provided, update the task
  } else {
    // Otherwise, add a new task to the task list
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };
    setTaskList!([...taskList, newTask]);
    setTitle("");
    setDifficulty(0);
  }
}
```

- We modify the `addTaskHandler` function to conditionally call the `handleUpdate` function if it exists. If not, it adds a new task to the task list.

### Step 3: Pass `handleUpdate` Function to `TaskForm`

```typescript
<Modal children={
  <TaskForm
    btnText="Editar Tarefa"
    taskList={taskList}
    task={taskToUpdate}
    handleUpdate={updateTask} // Pass the updateTask function as handleUpdate prop
  />
}/>
```

- We pass the `updateTask` function to the `TaskForm` component as the `handleUpdate` prop within the `Modal` component.
- This ensures that the `TaskForm` component can call the `updateTask` function to update the task in the list.

### Step 4: Implement `updateTask` Function in `App` Component

```typescript
const updateTask = (id: number, title: string, difficulty: number) => {
  const updatedTask: ITask = { id, title, difficulty };
  const updatedItems = taskList.map(task => task.id === updatedTask.id ? updatedTask : task);
  setTaskList(updatedItems); // Update the task list with the updated task
  hideOrShowModal(false); // Hide the modal after updating the task
}
```

- We implement the `updateTask` function to update the task in the task list with the provided id, title, and difficulty.
- After updating the task, we hide the modal by calling the `hideOrShowModal` function with `false` parameter.

### Summary:

By following these steps, the `TaskForm` component can handle both adding new tasks and updating existing tasks. When the user submits the form to edit a task, the `updateTask` function is called, which updates the task in the task list and hides the modal.
