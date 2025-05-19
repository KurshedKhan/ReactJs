# 🟢 **What is `useRef`?**

The `useRef` hook lets you:

1. **Access DOM elements** (like `document.getElementById`)
2. **Store mutable values** that do **not cause re-renders** when changed.

```js
const refContainer = useRef(initialValue);
```

---

## ✅ **Basic Usage – Accessing DOM Elements**

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // access DOM node
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
```

### 🔍 Explanation:

* `inputRef.current` gives direct access to the DOM input element.
* Doesn't re-render when `.current` is changed.

---

## ✅ **Intermediate Usage – Store Mutable Variables**

You can use `useRef` like a persistent variable between renders.

```jsx
import React, { useRef, useState } from 'react';

function ClickCounter() {
  const countRef = useRef(0);
  const [render, setRender] = useState(false);

  const handleClick = () => {
    countRef.current += 1;
    console.log('Clicked', countRef.current);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>Open console to see count</p>
    </>
  );
}
```

### 🔍 Why not use `useState`?

* `useRef` doesn't cause re-render.
* Useful for non-UI logic, like timers, counters, etc.

---

```jsx
import { useRef, useState } from "react"

function App() {
  const countRef = useRef(0);
  const [display, setDisplay] = useState(0);

  function inputFocus() {
    countRef.current += 1;
    console.log(countRef.current);
    setDisplay(countRef.current);
  }

  return (
    <>
      <p>{display}</p>
      <button type="button" onClick={inputFocus}>Click</button>
    </>
  );
}

export default App;

```

## ✅ **Advanced Usage – useRef with Previous Value**

```jsx
import { useEffect, useRef, useState } from 'react';

function TrackPreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}
```

### 🔍 Explanation:

* `prevCount.current` keeps the previous value across renders.
* `useEffect` updates it after each render.

---

## ✅ **Advanced Usage – useRef for setInterval**

```jsx
import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // cleanup
  }, []);

  return <p>Count: {count}</p>;
}
```

---

## ⚠️ Important Notes

| Concept                      | useRef vs useState                    |
| ---------------------------- | ------------------------------------- |
| Causes re-render?            | ❌ No (`useRef`) vs ✅ Yes (`useState`) |
| Keeps value between renders? | ✅ Yes                                 |
| Used for DOM access?         | ✅ Yes (`useRef`)                      |

---


## 🧠 Real-World Use Cases

1. **Focus control** – like autofocus on form fields.
2. **Timers** – storing `setInterval`, `setTimeout` references.
3. **Avoid stale closures** – access latest value inside async callbacks.
4. **Form validation** – store refs for inputs.
5. **Previous state tracking**.

---
