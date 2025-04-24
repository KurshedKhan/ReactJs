
# 📘 **Component in React (कंपोनेंट क्या है?)**

React में **Component** UI (User Interface) बनाने का सबसे महत्वपूर्ण हिस्सा है। A **Component** is a **reusable and independent part** that displays a piece of the UI.

---

## 🔹 **1️⃣ What is a Component? (कंपोनेंट क्या है?)**

**🔸 Definition (परिभाषा):**  
A Component in React is a JavaScript **function or class** that renders HTML (JSX).  
React app is made up of many small components.  
React ऐप कई छोटे-छोटे Components से मिलकर बना होता है।

**🔸 Key Features (मुख्य विशेषताएँ):**  
✅ **Reusable (पुनः प्रयोज्य)** – Can be used again and again.  
✅ **Independent (स्वतंत्र)** – Works independently from other components.  
✅ **Modular (मॉड्यूलर)** – Helps divide UI into smaller parts.

---

## 🔹 **2️⃣ Types of Components (कंपोनेंट के प्रकार)**

React में दो प्रकार के Component होते हैं:  
React has two types of components:

### 1. **Functional Component (फ़ंक्शनल कंपोनेंट)**  
👉 Simple JavaScript functions that return JSX.  
👉 These can use Hooks like `useState`, `useEffect`.  

**🔸 Example (उदाहरण):**
```javascript
import React from "react";

function Welcome() {
  return <h2>Welcome to React!</h2>;
}

export default Welcome;
```
✅ यह एक सिंपल फ़ंक्शनल कंपोनेंट है जो "Welcome to React!" दिखाएगा।

---

### 2. **Class Component (क्लास कंपोनेंट)**  
👉 These are JavaScript classes that extend `React.Component`.  
👉 Used earlier for state and lifecycle methods, now mostly replaced by functional components with hooks.

**🔸 Example (उदाहरण):**
```javascript
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Welcome to React!</h2>;
  }
}

export default Welcome;
```
✅ यह एक क्लास कंपोनेंट है जो वही "Welcome to React!" दिखाएगा।

---

## 🔹 **3️⃣ Using a Component (कंपोनेंट का उपयोग कैसे करें?)**

A component is used by importing it and then using it as a tag.

**🔸 Example (उदाहरण):**
```javascript
import React from "react";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```
✅ यहाँ `Welcome` Component को `App` Component में उपयोग किया गया है।

---

## 🔹 **4️⃣ Props & State in Component (प्रॉप्स और स्टेट)**

### ✅ **Props (प्रॉप्स) क्या होते हैं?**
👉 Props are **read-only** data passed from one component (parent) to another (child).  
👉 Props वे data होते हैं जो एक Component से दूसरे को भेजे जाते हैं।

**🔸 Example (उदाहरण):**
```javascript
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return <Welcome name="Kurshed" />;
}
```
✅ यहाँ `Welcome` Component "Kurshed" नाम को props के जरिए दिखाएगा।

---

### ✅ **State (स्टेट) क्या होती है?**
👉 State is the **dynamic data** of a component which can change.  
👉 Functional components use `useState()` for managing state.

**🔸 Example (उदाहरण):**
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
✅ जब बटन दबाया जाएगा, `count` बढ़ेगा और Component फिर से Render होगा।

---

## 🔹 **5️⃣ Advantages of Components (कंपोनेंट के फायदे)**

🔹 **Code Reusability (कोड पुनः उपयोग):** Use same component in multiple places.  
🔹 **Maintainability (सुलभ देखभाल):** Small, manageable pieces.  
🔹 **Performance (प्रदर्शन):** Prevent unnecessary re-rendering with `React.memo()`.  
🔹 **Modular UI (मॉड्यूलर यूआई):** UI को छोटे blocks में Divide करना आसान।

---

## ✅ **📌 Conclusion (निष्कर्ष)**

- **Component** is the building block of React UI.  
- There are two types: **Functional and Class Components**.  
- **Props** send data, **State** stores data.  
- Components should be **Reusable and Modular** for best practice.  
- React का मुख्य भाग Component होता है जो UI बनाता है।

---

**अगर आपको और उदाहरण चाहिए या गहराई से समझना है तो ज़रूर बताइए! 😊🚀**
