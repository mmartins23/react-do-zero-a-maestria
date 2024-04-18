# Event to Close Modal

To explain how the event is closing the modal, let's break down the steps involved in the code:

### Step 1: Create `closeModal` Function in the `Modal` Component

```typescript
const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
}
```

- We define a function `closeModal` that takes a `React.MouseEvent` event as a parameter.
- Inside the function, we select the modal element using `querySelector`.
- We add the class `"hide"` to the modal element's class list to hide the modal.

### Step 2: Attach `closeModal` Function to Click Event of the Fade Background

```typescript
<div className={styles.fade} onClick={closeModal}></div>
```

- We attach the `closeModal` function to the `onClick` event of the fade background (`<div>` with the class `fade`).
- When the fade background is clicked, the `closeModal` function is called, which hides the modal.

### Step 3: Update `hideOrShowModal` Function in the `App` Component

```typescript
const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
       modal!.classList.remove("hide");
    } else {
        modal!.classList.add("hide");
    }
}
```

- We update the `hideOrShowModal` function to add or remove the class `"hide"` from the modal element based on the `display` parameter.
- This function allows us to control the visibility of the modal by adding or removing the `"hide"` class.

### Step 4: Call `hideOrShowModal` Function to Show the Modal

```typescript
const editTask = (): void => {
    hideOrShowModal(true);
}
```

- We call the `hideOrShowModal` function with `true` as an argument to display the modal.
- This function is typically called when an action, such as editing a task, requires the modal to be shown.

### Step 5: Summary

By following these steps, clicking on the fade background of the modal triggers the `closeModal` function, which adds the `"hide"` class to the modal, effectively hiding it from view. Conversely, calling the `hideOrShowModal(true)` function shows the modal by removing the `"hide"` class. This mechanism allows for the opening and closing of the modal based on user interaction.