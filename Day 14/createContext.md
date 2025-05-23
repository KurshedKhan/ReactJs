React में `createContext` एक function है जो **Context API** का हिस्सा होता है। इसका इस्तेमाल **global data (जैसे theme, language, user info आदि)** को components में बिना props drilling के भेजने के लिए किया जाता है।

### 🔹 `createContext` का मतलब:

React का `createContext()` एक नया context object बनाता है। इस context को किसी component tree में इस्तेमाल करके हम data को direct child components को pass किए बिना deeply nested components तक पहुंचा सकते हैं।

---

### 📘 Syntax:

```jsx
const MyContext = React.createContext(defaultValue);
```

* `defaultValue`: जब कोई Provider न हो तब ये value use होगी।

---

### 📦 Example:

#### 1. **Context बनाना**

```jsx
import React, { createContext } from 'react';

const UserContext = createContext();
```

#### 2. **Provider से data देना**

```jsx
function App() {
  return (
    <UserContext.Provider value={"Kurshed Khan"}>
      <Child />
    </UserContext.Provider>
  );
}
```

#### 3. **Consumer से data लेना**

```jsx
function Child() {
  return (
    <UserContext.Consumer>
      {value => <h1>Hello, {value}</h1>}
    </UserContext.Consumer>
  );
}
```

👉 या modern तरीका (React 16.8+):

```jsx
import { useContext } from 'react';

function Child() {
  const user = useContext(UserContext);
  return <h1>Hello, {user}</h1>;
}
```

---

### ✅ कब इस्तेमाल करें?

* जब multiple components को एक ही data चाहिए हो।
* Props को बार-बार pass करने से बचना हो।
* Theme, language, auth, cart data जैसे global state manage करनी हो।

