# React Context API: Basic to Advanced

## 📌 What is Context API?

React Context API is a way to **pass data through the component tree** without having to pass props manually at every level.

---

## 🧱 Why use Context?

- Avoid "prop drilling" (passing props through many levels).
- Centralize global data (like user, theme, language).
- Used in small to medium state management.

---

## 🟢 1. Basic Usage of Context API

### Step 1: Create the Context

```js
import { createContext } from 'react';

export const MyContext = createContext();
````

### Step 2: Create a Provider Component

```js
import React, { useState } from 'react';
import { MyContext } from './MyContext';

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello Context');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
```

### Step 3: Use Context in a Child Component

```js
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const Child = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('Updated Value')}>Change</button>
    </div>
  );
};

export default Child;
```

### Step 4: Wrap Your App with Provider

```js
import React from 'react';
import { MyProvider } from './MyProvider';
import Child from './Child';

function App() {
  return (
    <MyProvider>
      <Child />
    </MyProvider>
  );
}

export default App;
```

---

## 🟡 2. Using Multiple Contexts

```js
export const ThemeContext = createContext();
export const AuthContext = createContext();
```

Then wrap multiple providers:

```js
<ThemeContext.Provider value={{ theme }}>
  <AuthContext.Provider value={{ user }}>
    <App />
  </AuthContext.Provider>
</ThemeContext.Provider>
```

---

## 🔵 3. useContext Hook

Instead of:

```js
<MyContext.Consumer>
  {value => <div>{value}</div>}
</MyContext.Consumer>
```

Use:

```js
const { value } = useContext(MyContext);
```

✅ Cleaner and simpler with functional components.

---

## 🔴 4. Updating Context Dynamically

Provide state setters in context:

```js
<MyContext.Provider value={{ state, setState }}>
```

Then you can update anywhere using:

```js
const { setState } = useContext(MyContext);
setState(prev => newValue);
```

---

## 🧠 5. Advanced: Optimizing Performance

### Problem

All components using context re-render **even if the value they use hasn’t changed**.

### Solution

Split contexts or use `memo` and `useMemo`:

```js
const value = useMemo(() => ({ state, setState }), [state]);
```

---

## 🧩 6. Using Context with TypeScript

```ts
interface MyContextType {
  count: number;
  setCount: (value: number) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
```

Then use:

```ts
const context = useContext(MyContext);
if (!context) throw new Error('useContext must be inside Provider');
```

---

## ✅ 7. When NOT to Use Context

* For frequent updates (e.g., every keystroke) – use local state instead.
* Large apps → consider Redux, Zustand, or other state libraries.

---

## 📚 Summary

| Feature         | Purpose                         |
| --------------- | ------------------------------- |
| `createContext` | Creates a context               |
| `Provider`      | Shares the data                 |
| `useContext`    | Access context data             |
| `useMemo`       | Prevents unnecessary re-renders |

---
