# Enum

In TypeScript, an `enum` (short for "enumeration") is a way to define a set of named constants, typically related to a specific domain or category. It's useful for defining a fixed set of values that are related and have a common purpose. Here's an explanation of the provided code:

1. **Props Interface with Enum**:

```tsx
interface Props {
    post: string;
    comments: string;
    commentsQty: number;
    tags: string[];
    // enum
    category: Category; // Prop 'category' is of type 'Category'
}
```

- In the `Props` interface, there's a property named `category` of type `Category`. Here, `Category` refers to an enum, which is defined later in the code.

2. **Enum Declaration**:

```tsx
// Enum
export enum Category {
    JS = "Javascript",
    TS = 'Typescript',
    PY = 'Python'
}
```

- An `enum` named `Category` is defined, containing three members: `JS`, `TS`, and `PY`, each with a corresponding string value representing a programming language.

3. **Destructuring Component**:

```tsx
const Destructuring = ({ post, comments, commentsQty, tags, category }: Props) => {
    return (
        <div>
            <h2>{post}</h2>
            <h3>{comments}</h3>
            <h4>{commentsQty}</h4>
            {tags.map(tag => <p>#{tag}</p>)}
            <p>{category}</p> {/* Displaying the value of 'category' */}
        </div>
    )
}
```

- The `Destructuring` component receives props including `category`, which is of type `Category`. Within the component's JSX, the value of `category` is displayed.

4. **Using the Component**:

```tsx
<Destructuring post={'Learning Destructuring in JS'} comments={'Nice Work'} commentsQty={1} tags={["js", "ts"]} category={Category.JS}/>
```

- When using the `Destructuring` component, you provide the `category` prop as one of the enum values. In this case, it's set to `Category.JS`, which corresponds to the string value `"Javascript"`.

Overall, enums in TypeScript provide a way to define a set of related constants and improve readability and maintainability by giving meaningful names to these values. In React with TypeScript, enums can be used to define and enforce a fixed set of options for certain props or variables.