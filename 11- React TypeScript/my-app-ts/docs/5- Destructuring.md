# Destructuring

Destructuring in React with TypeScript allows you to conveniently extract properties from objects or arrays, which is particularly useful when working with props. Let's break down the provided code and explain destructuring:

```tsx
interface Props {
    post: string;
    comments: string;
    commentsQty: number;
    tags: string[];
}

const Destructuring = ({ post, comments, commentsQty, tags }: Props) => {
    return (
        <div>
            <h2>{post}</h2>
            <h3>{comments}</h3>
            <h4>{commentsQty}</h4>
            {tags.map(tag => <p>#{tag}</p>)}
        </div>
    )
}

export default Destructuring;
```

Explanation:

1. **Props Interface**: The `Props` interface defines the structure of the props expected by the `Destructuring` component. It specifies that the `post`, `comments`, and `commentsQty` props are strings, while the `tags` prop is an array of strings.

2. **Functional Component**: The `Destructuring` component is a functional component that takes an object containing the props specified in the `Props` interface. Instead of accessing props using `props.post`, `props.comments`, etc., it uses object destructuring to directly extract the properties from the props object.

   ```tsx
   const Destructuring = ({ post, comments, commentsQty, tags }: Props) => {
   ```

   - `{ post, comments, commentsQty, tags }`: This is object destructuring syntax in the function parameters. It extracts the `post`, `comments`, `commentsQty`, and `tags` properties from the props object.

3. **Rendering**: Inside the component's JSX, the extracted props are used directly.

   ```tsx
   <div>
       <h2>{post}</h2>
       <h3>{comments}</h3>
       <h4>{commentsQty}</h4>
       {tags.map(tag => <p>#{tag}</p>)}
   </div>
   ```

   - `{post}`, `{comments}`, `{commentsQty}`: These variables contain the values extracted from the props object and are used to render the post title, comments, and comments quantity.

   - `{tags.map(tag => <p>#{tag}</p>)}:` This iterates over the `tags` array using the `map` function and renders each tag as a paragraph element preceded by a `#`.

4. **Exporting the Component**: Finally, the `Destructuring` component is exported so that it can be imported and used in other parts of the application.

5. **Usage**: The `Destructuring` component is used elsewhere in the application by passing props directly in JSX syntax:

   ```tsx
   <Destructuring post={'Learning Destructuring in JS'} comments={'Nice Work'} commentsQty={1} tags={["js", "ts"]}/>
   ```

   Here, the `post`, `comments`, `commentsQty`, and `tags` props are passed directly to the `Destructuring` component using JSX syntax. These props are used to populate the content of the component.