नीचे एक छोटा सा **React App** दिया गया है जिसमें हम `createContext`, `Provider`, और `useContext` का उपयोग कर रहे हैं। इसमें हम एक user का नाम `App` से लेकर `Profile` component तक pass कर रहे हैं बिना props के।

---

### ✅ Example: React App using `createContext`

```jsx
// App.jsx
import React, { createContext, useContext } from 'react';

// 1. Context बनाना
const UserContext = createContext();

function App() {
  const user = "Kurshed Khan";

  return (
    // 2. Context Provider से data देना
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile />
    </div>
  );
}

function Profile() {
  // 3. useContext से context value लेना
  const user = useContext(UserContext);

  return <h3>Welcome, {user}!</h3>;
}

export default App;
```

---

### 🔍 Output:

```
Dashboard
Welcome, Kurshed Khan!
```

---

### 📌 Summary:

* `createContext()` से context बनाया।
* `Provider` से value दी।
* `useContext()` से value को access किया।

