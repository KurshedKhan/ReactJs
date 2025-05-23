चलिए अब एक **थोड़ा real-world example** बनाते हैं जिसमें हम **Theme (Dark/Light Mode)** को manage करेंगे React `createContext` और `useContext` से।

---

## 🌗 React Dark/Light Theme Toggle using Context API

### 🧠 क्या होगा:

* User theme toggle कर सकता है (Light 🔆 / Dark 🌙)
* Theme data context से सब components को मिलेगा
* Context के बिना हर component में prop भेजना पड़ता

---

### 🧩 Code:

#### 1. `ThemeContext.js` – Context File

```jsx
// ThemeContext.js
import { createContext, useState } from "react";

// 1. Theme context बनाएं
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---

#### 2. `App.jsx` – Main App File

```jsx
// App.jsx
import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

function MainPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    background: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    minHeight: "100vh",
    transition: "0.3s"
  };

  return (
    <div style={appStyle}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
```

---

### ✅ Features:

* Global theme context बनाया गया
* Child component (`MainPage`) में सीधे theme access किया
* Toggle करने पर पूरे app का theme बदलता है

---

### 🔧 Output:

* शुरू में Light mode
* Button दबाने पर Dark mode और फिर toggle

---

