# Removing Task

To explain how removing a task is done, let's break down the steps involved in the code:

### Step 1: Define the `deleteTask` Function in the `App` Component

```typescript
const deleteTask = (id: number) => {
  setTaskList(
    taskList.filter(task => task.id !== id)
  );
};
```

- We define a function `deleteTask` that takes an `id` as a parameter.
- Inside the function, we update the `taskList` state by filtering out the task with the matching `id` using the `filter` method.

### Step 2: Pass the `deleteTask` Function as a Prop to the `TaskList` Component

```typescript
<TaskList taskList={taskList} handleDelete={deleteTask} />
```

- We pass the `taskList` state and the `deleteTask` function as props to the `TaskList` component.
- The `handleDelete` prop is a function that allows the `TaskList` component to communicate with the `App` component to delete a task.

### Step 3: Receive and Use the `handleDelete` Prop in the `TaskList` Component

```typescript
interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
}
```

- We define an interface `Props` for the `TaskList` component, which includes the `taskList` array and the `handleDelete` function that takes an `id` as a parameter and returns `void`.

```typescript
<i onClick={() => handleDelete(task.id)}><BsTrash /></i>
```

- We add an `onClick` event to the delete icon (`<BsTrash />`).
- When the delete icon is clicked, it calls the `handleDelete` function with the `id` of the task as a parameter to delete the corresponding task from the task list.

### Summary:

By following these steps, the `App` component manages the state of the task list and provides a function `deleteTask` to delete tasks. The `TaskList` component receives the task list and the `handleDelete` function as props, allowing users to delete tasks directly from the task list UI. When the delete icon is clicked, it triggers the `handleDelete` function, which updates the task list state in the `App` component, effectively removing the task from the list.