The `useReducer` hook in React is used for **managing complex state logic** in a component. It’s an alternative to `useState` and is especially useful when:

* The **state logic is complex** (e.g. involves multiple sub-values).
* The **next state depends on the previous state**.
* You want to **manage state updates centrally**, like in Redux.

---

### ✅ Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* `reducer`: A function that takes `(state, action)` and returns a new state.
* `initialState`: The starting state value.
* `state`: The current state.
* `dispatch`: A function to send an `action` to the reducer.

---

### 📦 Basic Example

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default Counter;
```

---

### ⚡ Advantages over `useState`

* Better for **multiple related state values**.
* Keeps **logic cleaner** for **complex updates**.
* Easier to **test and maintain** with central reducer logic.

---

### 🧠 When to Use `useReducer`

* Managing form inputs with validation.
* Handling dynamic components (like tabs, accordions).
* Complex toggle or multiple state transitions.
* As a light version of Redux in small apps.

---

