# Template Expression

In React, template expressions refer to the ability to embed JavaScript expressions within JSX code using curly braces `{}`. These expressions are evaluated at runtime and their results are inserted into the rendered output. Template expressions are useful for dynamically generating content based on variables, functions, or other JavaScript expressions. Here's an example:

```jsx
import React from 'react';

const TemplateExpressionExample = () => {
    const name = 'John';
    const age = 30;
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

    return (
        <div>
            <p>{greeting}</p>
            <p>{name.toUpperCase()}</p>
            <p>{age * 2}</p>
        </div>
    );
};

export default TemplateExpressionExample;
```

Explanation:

- In the above example, we define a React functional component `TemplateExpressionExample`.
- Inside this component, we define variables `name` and `age`, and a template string `greeting` which includes template expressions `${name}` and `${age}`.
- Within the JSX, we use template expressions to dynamically render the value of `greeting`, `name.toUpperCase()`, and `age * 2`.
- When the component is rendered, the template expressions are evaluated and replaced with the corresponding values, resulting in dynamically generated content being displayed.

Template expressions provide a powerful way to dynamically generate content in React components, allowing for more flexible and dynamic user interfaces. They enable developers to inject JavaScript expressions directly into JSX, making it easier to create dynamic and interactive UIs.