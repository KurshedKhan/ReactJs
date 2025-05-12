# 📌 React State - Basic to Advanced (हिंदी & English)

React में state एक महत्वपूर्ण concept है जो components को interactive और dynamic बनाता है। यह guide आपको React state के basic से लेकर advanced concepts तक detail में समझाएगी। 🚀

---

## 🌱 1️⃣ State क्या है? (What is State?)

React में state data का एक container होता है, जो किसी component के अंदर store किया जाता है और UI को dynamically update करता है।

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State variable

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
✅ **useState Hook** का उपयोग करके हम state को define और modify कर सकते हैं।

---

## 🏗 2️⃣ State vs Props 🤔

| Feature | State | Props |
|---------|-------|-------|
| Mutable (बदल सकता है) | ✅ | ❌ |
| Controlled by Component | ✅ | ❌ |
| Passed from Parent | ❌ | ✅ |
| Used for Interactivity | ✅ | ❌ |

📌 **Props** parent component से data पास करने के लिए होते हैं, जबकि **state** component के अंदर ही manage होता है।

---

## 🔄 3️⃣ State Update Rules (State को सही तरीके से Update करना)

❌ **Wrong:**
```jsx
state.count = state.count + 1; // ❌ Direct mutation
```
✅ **Right:**
```jsx
setCount(count + 1); // ✅ Correct way
```

🚨 **React State asynchronous होता है**, इसलिए direct mutate करने से issues हो सकते हैं। हमेशा `setState` या `useState` का उपयोग करें।

---

## 📌 4️⃣ Functional vs Class Component में State 🤔

🔹 **Class Component में State:**
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

🔹 **Functional Component में State (Hooks का उपयोग करके)**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
✅ Functional components में `useState` hook state handle करने के लिए इस्तेमाल किया जाता है।

---

## 🔥 5️⃣ Advanced State Concepts (Advanced Techniques)

### 🔄 5.1 State के साथ useEffect का उपयोग (Side Effects Handling)
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <h1>Seconds: {seconds}</h1>;
}
```
📌 `useEffect` asynchronous operations को handle करने में मदद करता है।

### 🌟 5.2 Multiple State Variables
```jsx
const [name, setName] = useState('John');
const [age, setAge] = useState(25);
```
✅ Functional components में कई states का उपयोग किया जा सकता है।

### 🏛 5.3 Complex State Management (useReducer Hook)
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
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```
✅ `useReducer` complex state management के लिए बेहतर विकल्प है।

---

## 🎯 Conclusion (निष्कर्ष)

| Concept | Summary |
|---------|---------|
| `useState` | Simple state management |
| `useEffect` | Side-effects handle करना |
| `useReducer` | Complex state management |
| Class vs Functional | Functional hooks के साथ ज्यादा readable |

🎉 **React State को समझना एक मजबूत React developer बनने की कुंजी है!** अब आप state को आसानी से manage कर सकते हैं। 😃🚀

---

💡 **Happy Coding! 😊🔥**
