# Creating Modal

To create a modal with the provided code, let's break down the steps involved:

### Step 1: Define Props Interface for `Modal`

```typescript
interface Props {
    children: React.ReactNode;
}
```

- We define an interface `Props` specifying that the `Modal` component expects a `children` prop, which can be any valid React node.

### Step 2: Create `Modal` Component

```typescript
const Modal = ({ children }: Props) => {
    return (
        <div id="modal">
            <div className={styles.fade}></div>
            <div className={styles.modal}>
                <h2>
                    Texto modal
                </h2>
                {children}
            </div>
        </div>
    )
}
```

- The `Modal` component renders a container `<div>` with the id `modal`.
- It contains two nested `<div>` elements: one for the modal backdrop (`.fade`) and another for the modal content (`.modal`).
- The modal content includes a placeholder `<h2>` element and the `children` prop, which represents the content rendered inside the modal.

### Step 3: CSS Styling for Modal and Fade Effect

```css
.fade {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.3;
}

.modal {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 500px;
    height: 400px;
    z-index: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.modal h2 {
    margin-bottom: 1em;
}
```

- We define CSS styles for the modal backdrop (`.fade`) and modal content (`.modal`).
- The `.fade` class creates a semi-transparent black background covering the entire screen to provide a fade effect when the modal is displayed.
- The `.modal` class positions the modal in the center of the screen with specific dimensions and styles the content inside it.

### Step 4: Import and Use `Modal` Component in `App` Component

```typescript
import Modal from "./components/Modal";
```

- We import the `Modal` component into the `App` component.

```typescript
<Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList}/>}/>
```

- We render the `Modal` component, passing the `TaskForm` component as `children`.
- Here, `TaskForm` component acts as the content of the modal.

### Summary:

By following these steps, the `Modal` component is created with the specified CSS styling for the modal backdrop and content. The `Modal` component is then used in the `App` component to display a modal window containing the `TaskForm` component as its content. This approach allows for the creation of reusable modal components in React applications.