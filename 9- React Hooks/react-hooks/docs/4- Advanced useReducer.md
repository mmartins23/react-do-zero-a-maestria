# Advanced useReducer

In this code example, `useReducer` is being used to manage the state of a list of tasks (`tasks`). Let's break down how `useReducer` is implemented:

1. **Starting with useReducer**:
   ```javascript
   const [number, dispatch] = useReducer((state, action) => {
       return Math.random(state);
   }, 1);
   ```
   - This part initializes the `number` state with an initial value of `1` using `useReducer`.
   - The reducer function here is a simple arrow function that returns a random number. However, it's important to note that the reducer function should be a pure function, meaning it should not mutate the state directly but return a new state object.

2. **Advanced useReducer**:
   ```javascript
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
   ```
   - The `initialTasks` array represents the initial state for managing tasks.
   - `taskReducer` is a custom reducer function responsible for updating the task state based on dispatched actions.
   - Inside the `taskReducer`, actions are processed based on their type:
     - `"ADD"`: Adds a new task to the state by generating a new task object with a random id and the text provided in the input field. Then, it clears the input field for adding a new task.
     - `"REMOVE"`: Removes a task from the state based on its id.
     - `default`: Returns the current state if the action type is not recognized.
   - `useState` is used to manage the input field's value for adding tasks (`taskText`) and the initial state for tasks (`tasks`).

3. **Rendering**:
   - The component renders a heading "useReducer" and displays the current value of `number`.
   - It renders a button that triggers a change in the `number` state when clicked.
   - Below the number section, it displays a form for adding tasks, a list of tasks, and a remove button for each task.
   - Each task in the list can be removed by double-clicking on it, which dispatches a `"REMOVE"` action to update the state accordingly.

Overall, `useReducer` provides a cleaner and more scalable solution for managing state, especially for complex state logic like managing tasks in this example.