Here's a complete guide to the **`useEffect` hook in React**, from **basic to advanced level**, with clear examples and explanations.

---

## ✅ **What is `useEffect`?**

The `useEffect` hook lets you **perform side effects** in function components, like:

* Data fetching
* DOM manipulation
* Setting up subscriptions or timers

```js
useEffect(() => {
  // side-effect logic
}, [dependencies]);
```

---

## 🔰 **1. Basic Usage – Run on Every Render**

```jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Component rendered");
  });

  return <div>Hello</div>;
}
```

### 🔍 Explanation:

* Runs **after every render** (no dependency array).
* Use carefully – can cause performance issues.

---

## ✅ **2. Run Once on Mount (ComponentDidMount)**

```jsx
useEffect(() => {
  console.log("Mounted");
}, []); // empty dependency array
```

### 📌 Best for:

* Fetching data on load
* Setting up event listeners
* Initial animations

---

## ✅ **3. Run When Dependencies Change**

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]); // only runs when count changes
```

### 🔍 Example:

```jsx
const [count, setCount] = useState(0);
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## ✅ **4. Cleanup Function (ComponentWillUnmount)**

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
    console.log("cleanup");
  };
}, []);
```

### 📌 Best for:

* Clearing intervals/timeouts
* Unsubscribing from events or websockets

---

## ✅ **5. useEffect with Async Functions (Data Fetching)**

```jsx
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('https://api.example.com/data');
    const json = await res.json();
    console.log(json);
  };

  fetchData();
}, []);
```

### ⚠️ Never make the `useEffect` callback async directly.

---

## ✅ **6. useEffect with Multiple Dependencies**

```jsx
useEffect(() => {
  console.log("userId or token changed");
}, [userId, token]);
```

### ✅ Keep dependencies up-to-date to avoid bugs.

---

## ✅ **7. useEffect to Watch Props**

```jsx
function Child({ value }) {
  useEffect(() => {
    console.log("Prop value changed:", value);
  }, [value]);

  return <div>{value}</div>;
}
```

---

## ✅ **8. useEffect for Event Listeners**

```jsx
useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

---

## ✅ **9. useEffect to Handle Outside Click**

```jsx
const ref = useRef();

useEffect(() => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("Clicked outside");
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
```

---

## ✅ **10. Prevent useEffect on Initial Render (Advanced)**

```jsx
const isFirstRender = useRef(true);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  console.log("Run only on updates");
}, [someValue]);
```

---

## 📌 `useEffect` Summary Table

| Pattern                        | Runs when                        |
| ------------------------------ | -------------------------------- |
| `useEffect(fn)`                | On every render                  |
| `useEffect(fn, [])`            | Once on mount                    |
| `useEffect(fn, [dep])`         | On mount + when `dep` changes    |
| Cleanup with `return () => {}` | On unmount or before next effect |

---
