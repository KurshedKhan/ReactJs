Great, Kurshed! Here are **10 real-world `useEffect` practice exercises** (from beginner to advanced) with **questions and answers**.

---

## 🧪 **Practice Exercise 1: Console Log on Mount**

### ❓ **Q1:** Create a component that logs `"Component Mounted"` only once when it first renders.

### ✅ **Answer:**

```jsx
import React, { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // run once on mount

  return <h1>Hello</h1>;
}
```

---

## 🧪 **Practice Exercise 2: Update Page Title with Count**

### ❓ **Q2:** When the count changes, update the document title.

### ✅ **Answer:**

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## 🧪 **Practice Exercise 3: Timer with Cleanup**

### ❓ **Q3:** Start a timer on mount that increments `time` every second. Clear it on unmount.

### ✅ **Answer:**

```jsx
function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return <p>Time: {time}</p>;
}
```

---

## 🧪 **Practice Exercise 4: Fetch Data on Mount**

### ❓ **Q4:** Fetch and display a list of users from an API when the component loads.

### ✅ **Answer:**

```jsx
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

## 🧪 **Practice Exercise 5: Window Resize Listener**

### ❓ **Q5:** Track and display window width. Update it on resize.

### ✅ **Answer:**

```jsx
function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Width: {width}px</p>;
}
```

---

## 🧪 **Practice Exercise 6: Detect Outside Click**

### ❓ **Q6:** Close a modal if the user clicks outside it.

### ✅ **Answer:**

```jsx
function Modal({ onClose }) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return <div ref={ref} className="modal">I'm a modal</div>;
}
```

---

## 🧪 **Practice Exercise 7: Scroll Event Listener**

### ❓ **Q7:** Display how far the user has scrolled.

### ✅ **Answer:**

```jsx
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <p>Scrolled: {scrollY}px</p>;
}
```

---

## 🧪 **Practice Exercise 8: Trigger Effect Only on Update (Skip First Render)**

### ❓ **Q8:** Only run `console.log("Updated")` when `value` changes — not on initial render.

### ✅ **Answer:**

```jsx
function UpdateLogger({ value }) {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    console.log("Updated");
  }, [value]);

  return <div>{value}</div>;
}
```

---

## 🧪 **Practice Exercise 9: Persist Value to LocalStorage**

### ❓ **Q9:** Save count to `localStorage` every time it changes.

### ✅ **Answer:**

```jsx
function LocalStorageCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## 🧪 **Practice Exercise 10: Auto-Save Form Input**

### ❓ **Q10:** Save input to `localStorage` automatically after typing.

### ✅ **Answer:**

```jsx
function AutoSaveInput() {
  const [name, setName] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("name", name);
    }, 500);

    return () => clearTimeout(timeout); // debounce
  }, [name]);

  return (
    <input value={name} onChange={e => setName(e.target.value)} />
  );
}
```
