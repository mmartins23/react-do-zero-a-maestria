# Guide: Setting up CSS Modules with TypeScript in React

In modern web development, styling components is an essential aspect of creating engaging user interfaces. One popular approach is to use CSS Modules along with TypeScript in React applications. This guide will walk you through setting up CSS Modules with TypeScript in a React project.


### Step 1: Create CSS Module Files

Create separate CSS files for each component you want to style. For example, you can create `Footer.module.css` and `Header.module.css`.

```css
/* Footer.module.css */
.footer {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282c34;
    color: #FFF;
}

.footer span {
    font-weight: bold;
    color: #61dafb
}

/* Header.module.css */
.header {
    background-color: #282c34;
    color: #61dafb;
    text-align: center;
    padding: 1em;
}
```

### Step 2: Declare CSS Module Types

To let TypeScript know about CSS Modules, create a global declaration file `Global.d.ts` in your project's source directory.

```typescript
declare module "*.module.css";
```

This declaration tells TypeScript to recognize `.module.css` files as modules with specific types.

### Step 3: Implement Components

Now, let's create React components and use the CSS Modules we defined earlier.

```tsx
// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <p>
            <span>React + TS Todo</span> @{new Date().getFullYear()}
        </p>
    </footer>
  );
}

export default Footer;
```

```tsx
// Header.tsx
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>React + TS Todo</h1>
        </header>
    );
}

export default Header;
```

### Step 4: Use Components

Finally, integrate these components into your application where needed.

```tsx
// App.tsx
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

That's it! You've successfully set up CSS Modules with TypeScript in a React project. You can now style your components with CSS while enjoying the benefits of TypeScript's type safety and scoped styling. Happy coding!