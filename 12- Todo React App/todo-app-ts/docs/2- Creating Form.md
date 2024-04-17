# Creating Form

Let's break down the creation of the two components, `TaskList` and `TaskForm`, step by step:

### Step 1: Define Props Interface for `TaskList`

```typescript
type Props = {}
```

- We define an empty interface `Props` for `TaskList`. This step seems unnecessary as `TaskList` does not receive any props.

### Step 2: Create `TaskList` Component

```typescript
const TaskList = (props: Props) => {
    return (
        <div>
            <p>Lista de tarefas</p>
        </div>
    )
}
```

- We define the `TaskList` functional component that returns a simple div with a paragraph element indicating a task list.

### Step 3: Export `TaskList` Component

```typescript
export default TaskList
```

- We export the `TaskList` component to make it available for import in other files.

### Step 4: Define Props Interface for `TaskForm`

```typescript
type Props = {
  btnText: string;
}
```

- We define an interface `Props` for `TaskForm` with a single property `btnText` of type `string`.

### Step 5: Create `TaskForm` Component

```typescript
const TaskForm = ({btnText}: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Titulo da tarefa" />
      </div>

      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
      </div>

      <button value={btnText}>{btnText}</button>
    </form>
  )
}
```

- We define the `TaskForm` functional component that receives `btnText` as a prop, and it renders a form with input fields for title and difficulty, along with a button.

### Step 6: Export `TaskForm` Component

```typescript
export default TaskForm
```

- We export the `TaskForm` component to make it available for import in other files.

### Summary

In summary, we created two components, `TaskList` and `TaskForm`, in TypeScript. `TaskList` is a simple component without any props, while `TaskForm` receives a prop `btnText` indicating the text to be displayed on the button. We defined interfaces `Props` for both components to specify the prop types. Finally, we exported both components to make them accessible in other files.