बिलकुल कुर्शेद! नीचे आपको **Bootstrap 5** के साथ एक पूरा React example मिल रहा है जिसमें:

* `createContext` से **theme toggle** (light/dark)
* Bootstrap की classes से **responsive layout**
* Styling भी Bootstrap से की गई है

---

## 🌗 React + Bootstrap 5 Theme Toggle with Context

### 🔧 Installation (if needed)

अगर आपने Bootstrap install नहीं किया है:

```bash
npm install bootstrap
```

और `index.js` या `main.jsx` में import करें:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

### 🧩 1. `ThemeContext.js`

```jsx
// ThemeContext.js
import { createContext, useState } from "react";

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

### 🧩 2. `App.jsx`

```jsx
// App.jsx
import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

function MainPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`min-vh-100 d-flex flex-column justify-content-center align-items-center bg-${theme} text-${theme === "light" ? "dark" : "light"}`} style={{ transition: "0.5s" }}>
      <div className="container text-center">
        <h1 className="mb-4">{theme.toUpperCase()} MODE</h1>
        <button className="btn btn-outline-primary" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
```

---

### ✅ Features:

| Feature             | Implementation                                  |
| ------------------- | ----------------------------------------------- |
| 🔁 Toggle theme     | Context + useContext                            |
| 📱 Responsive       | Bootstrap classes (`container`, `d-flex`, etc.) |
| 🎨 Color change     | Bootstrap's `bg-light`, `bg-dark`, `text-light` |
| ⚡ Smooth transition | CSS inline style (`transition: 0.5s`)           |

---

### 🧪 Output:

#### Light Mode:

```
White background, black text, toggle button centered.
```

#### Dark Mode (on button click):

```
Black background, white text, smooth change.
```

---

