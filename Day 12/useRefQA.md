Perfect! Here are **10 practical `useRef` exercises with solutions**, designed to help you **master `useRef`** in real-world React use cases—from beginner to advanced.

---

## 🧪 **Exercise 1: Focus Input on Button Click**

### ❓ Q1: When the button is clicked, focus the input field.

### ✅ Solution:

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
```

---

## 🧪 **Exercise 2: Store Previous Count**

### ❓ Q2: Display both current and previous values of count.

### ✅ Solution:

```jsx
function PreviousCount() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}
```

---

## 🧪 **Exercise 3: Stop Re-renders with useRef**

### ❓ Q3: Use `useRef` to track how many times a button is clicked without causing re-renders.

### ✅ Solution:

```jsx
function ClickTracker() {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current++;
    console.log("Clicked", clickCount.current);
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

---

## 🧪 **Exercise 4: Stopwatch with Start/Stop**

### ❓ Q4: Use `useRef` to store interval ID so you can stop the timer.

### ✅ Solution:

```jsx
function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      <p>{seconds}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
```

---

## 🧪 **Exercise 5: Detect Outside Click**

### ❓ Q5: Close a modal when the user clicks outside it.

### ✅ Solution:

```jsx
function Modal({ onClose }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return <div ref={ref} className="modal">Click outside to close</div>;
}
```

---

## 🧪 **Exercise 6: Persist Scroll Position**

### ❓ Q6: Log scroll Y position in console without re-renders.

### ✅ Solution:

```jsx
function ScrollLogger() {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      console.log("ScrollY:", scrollYRef.current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <p>Scroll and check console</p>;
}
```

---

## 🧪 **Exercise 7: Access Latest State Inside Interval**

### ❓ Q7: Avoid stale state in setInterval using useRef.

### ✅ Solution:

```jsx
function StableTimer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Current count (ref):", countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
```

---

## 🧪 **Exercise 8: Ref to Store Input Value (Uncontrolled Component)**

### ❓ Q8: Get input value on form submit using `useRef` (no useState).

### ✅ Solution:

```jsx
function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🧪 **Exercise 9: Focus Input Automatically on Mount**

### ❓ Q9: Autofocus an input field when the component loads.

### ✅ Solution:

```jsx
function AutoFocusInput() {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return <input ref={ref} placeholder="I get focus on mount" />;
}
```

---

## 🧪 **Exercise 10: Create a Custom Hook for Previous Value**

### ❓ Q10: Make a reusable hook `usePrevious`.

### ✅ Solution:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Usage:
function Example() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prev}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}
```

---

