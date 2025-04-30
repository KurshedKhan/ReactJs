# Conditional Statements in React.js - A Deep Dive

Conditional rendering in React.js allows components to dynamically decide what to render based on a given condition. In this guide, we will explore different approaches from basic to advanced levels.

---

## 1️⃣ Conditional Rendering Using `if` Statement

The simplest way to conditionally render a component is by using a standard `if` statement.

```jsx
function Message({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

### When to Use?
✔️ When you need a simple conditional rendering logic.
✔️ Suitable for small components.

---

## 2️⃣ Using Ternary Operator `? :`

A more concise way to write conditional logic in JSX is by using the ternary operator.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h1>
  );
}
```

### When to Use?
✔️ Best for simple `if-else` conditions.
✔️ Keeps JSX clean and readable.

---

## 3️⃣ Using Logical `&&` Operator

When you only need to render something based on a true condition, the `&&` operator can be handy.

```jsx
function Notification({ hasNewMessages }) {
  return (
    <div>
      <h1>Inbox</h1>
      {hasNewMessages && <p>You have new messages!</p>}
    </div>
  );
}
```

### When to Use?
✔️ Best for conditions where rendering is optional.
✔️ Avoids writing unnecessary `else` parts.

---

## 4️⃣ Using `switch` Case for Multiple Conditions

For multiple conditional cases, `switch` statements can be more readable.

```jsx
function StatusMessage({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      return <p>Error occurred!</p>;
    case 'success':
      return <p>Operation successful!</p>;
    default:
      return <p>Unknown status</p>;
  }
}
```

### When to Use?
✔️ Best for handling multiple conditions.
✔️ Keeps code structured and readable.

---

## 5️⃣ Conditional Rendering Using IIFE (Immediately Invoked Function Expression)

IIFE can be used inside JSX to handle complex conditions inline.

```jsx
function UserProfile({ user }) {
  return (
    <div>
      {(() => {
        if (!user) return <p>Guest User</p>;
        if (user.isAdmin) return <p>Admin User</p>;
        return <p>Regular User</p>;
      })()}
    </div>
  );
}
```

### When to Use?
✔️ When dealing with multiple conditions inside JSX.
✔️ Helps in keeping logic encapsulated within JSX.

---

## 6️⃣ Using Higher-Order Components (HOCs) for Conditional Rendering

A more advanced approach is to use Higher-Order Components (HOCs) to wrap conditional logic.

```jsx
function withAuth(Component) {
  return function WrappedComponent(props) {
    if (!props.isAuthenticated) {
      return <p>You need to log in.</p>;
    }
    return <Component {...props} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
```

### When to Use?
✔️ Best for protecting routes or restricting access.
✔️ Good for reusable authentication logic.

---

## 7️⃣ Using Render Props for Conditional Rendering

Render props allow conditionally rendering different components.

```jsx
function Auth({ isAuthenticated, children }) {
  return isAuthenticated ? children : <p>Please log in.</p>;
}

<Auth isAuthenticated={true}>
  <Dashboard />
</Auth>
```

### When to Use?
✔️ Best for passing conditional logic dynamically.
✔️ Useful when components need different render behavior.

---

## 8️⃣ Conditional Rendering with React Hooks

You can also use `useState` or `useEffect` to manage conditional rendering dynamically.

```jsx
function ToggleComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Now you see me!</p>}
    </div>
  );
}
```

### When to Use?
✔️ Best when dealing with dynamic state changes.
✔️ Useful for interactive UI elements.

---

## Conclusion 🎯

| Method | Best For |
|--------|---------|
| `if` Statement | Simple conditions |
| Ternary Operator | Short and readable JSX |
| Logical `&&` | Rendering only when needed |
| `switch` Statement | Multiple conditions |
| IIFE | Complex conditions inside JSX |
| HOCs | Reusable conditional logic |
| Render Props | Dynamic component behavior |
| Hooks (`useState`) | State-based rendering |

Mastering these techniques will make you proficient in conditional rendering in React.js. 🚀 Happy coding! 🎉
