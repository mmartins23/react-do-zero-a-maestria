# Adding Tasks

Certainly! Let's break down the code step by step with explanations:

### Step 1: Define Props Interface for `TaskForm`

```typescript
interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}
```

- We define an interface `Props` to specify the props expected by the `TaskForm` component.
- `btnText`: A string representing the text to be displayed on the button.
- `taskList`: An array of tasks (`ITask[]`) representing the list of tasks.
- `setTaskList`: An optional setter function to update the task list.

### Step 2: Create `TaskForm` Component

```typescript
const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  // State initialization
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  // Form submission handling
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate a random id
    const id = Math.floor(Math.random() * 1000);

    // Create a new task object
    const newTask: ITask = { id, title, difficulty };

    // Update the task list state
    setTaskList!([...taskList, newTask]);

    // Reset input fields
    setTitle("");
    setDifficulty(0);
  };

  // Input change handling
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  // Rendering the form
  return (
    <form onSubmit={addTaskHandler}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <button type="submit">{btnText}</button>
    </form>
  );
};
```

### Step 3: Explanation:

1. **State Initialization**:
   - We initialize state variables `id`, `title`, and `difficulty` using the `useState` hook to manage the task details.

2. **Form Submission Handling (`addTaskHandler`)**:
   - We define a function `addTaskHandler` to handle form submission.
   - Inside `addTaskHandler`, we prevent the default form submission behavior (`e.preventDefault()`).
   - We generate a random `id` for the new task.
   - We create a new task object (`newTask`) using the provided `title` and `difficulty`.
   - We update the task list state (`taskList`) by adding the new task using the `setTaskList` setter function.
   - We reset the `title` and `difficulty` state variables to clear the input fields.

3. **Input Change Handling (`handleChange`)**:
   - We define a function `handleChange` to handle changes in the input fields.
   - Based on the `name` attribute of the input field, we update the corresponding state variable (`title` or `difficulty`) with the new value.

4. **Rendering Form**:
   - We render a form with input fields for `title` and `difficulty`, along with a submit button.
   - Input fields are controlled components, meaning their values are controlled by the component's state (`value={title}` and `value={difficulty}`).
   - We attach event handlers `handleChange` to input fields and `addTaskHandler` to the form's `onSubmit` event.

This `TaskForm` component allows users to add new tasks by filling out the form and submitting it. The task details are collected from the input fields, and a new task is added to the task list maintained in the parent component's state.