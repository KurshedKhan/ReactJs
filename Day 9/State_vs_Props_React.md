# State vs Props in React (स्टेट और प्रॉप्स में अंतर)

React में **State** और **Props** दोनों का उपयोग **Component में डेटा स्टोर करने और शेयर करने** के लिए किया जाता है।  
लेकिन दोनों में कुछ **मुख्य अंतर** होते हैं।  

---

## 1️⃣ State (स्टेट) – Component का Internal Data

### 📌 State क्या है?
- **State वह डेटा होता है जो Component के अंदर स्टोर होता है और बदल सकता है।**
- जब State बदलता है, तो Component **Re-render** होता है और नया UI दिखता है।
- **Functional Component में `useState()` Hook का उपयोग होता है।**

### 📌 Example – State का उपयोग

```javascript
import React, { useState } from "react";

function Counter() {
  // State: count नाम का एक वेरिएबल जिसे setCount से अपडेट करेंगे
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

✅ **जब "Increment" बटन दबाया जाएगा, `setCount` State को अपडेट करेगा और UI Re-render होगा।**  

---

## 2️⃣ Props (प्रॉप्स) – Parent से Child को डेटा भेजना

### 📌 Props क्या है?
- **Props वह डेटा होते हैं जो Parent Component से Child Component में भेजे जाते हैं।**
- **Props Read-Only होते हैं (इनका मान बदला नहीं जा सकता)।**
- Props को **Component में Argument की तरह पास किया जाता है।**

### 📌 Example – Props का उपयोग

📄 **Parent Component (`App.js`)**

```javascript
import React from "react";
import Welcome from "./Welcome";

function App() {
  return <Welcome name="Kurshed" />;
}

export default App;
```

📄 **Child Component (`Welcome.js`)**

```javascript
import React from "react";

function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

export default Welcome;
```

✅ **Output:**  
```
Welcome, Kurshed!
```
✔ `App.js` → `Welcome.js` को `name="Kurshed"` Props भेजता है।  
✔ `Welcome.js` `props.name` को इस्तेमाल करके नाम दिखाता है।  

---

## 3️⃣ State vs Props में अंतर (Differences Between State and Props)

| Feature | State (स्टेट) | Props (प्रॉप्स) |
|---------|-------------|-------------|
| **Definition** | Component का खुद का Data | Parent से Child को भेजा गया Data |
| **Mutability (बदल सकते हैं?)** | ✅ हाँ, `useState()` से Update कर सकते हैं | ❌ नहीं, Read-Only होता है |
| **Component को कौन कंट्रोल करता है?** | Component खुद | Parent Component |
| **Re-render कब होता है?** | जब State बदले | जब Parent से नया Props मिले |
| **Usage** | इंटरनल डेटा स्टोर करने के लिए | Parent से Child में डेटा भेजने के लिए |

---

## 4️⃣ Props और State को एक साथ कैसे उपयोग करें?

✔ हम **Parent Component में State रख सकते हैं** और इसे **Props के रूप में Child Component में भेज सकते हैं।**  

📄 **Parent Component (`App.js`)**

```javascript
import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return <Counter count={count} setCount={setCount} />;
}

export default App;
```

📄 **Child Component (`Counter.js`)**

```javascript
import React from "react";

function Counter({ count, setCount }) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

✅ **Parent का `count` और `setCount`** → **Child Component (`Counter.js`) को Props में भेजा जाता है।**  
✅ अब `Counter.js` में State नहीं है, लेकिन वह Parent के State को Update कर सकता है।  

---

## 🔹 निष्कर्ष (Summary)

✅ **State** → Component के **अंदर का डेटा** होता है और **बदल सकता है।**  
✅ **Props** → Parent से Child को **डेटा पास करने के लिए** होते हैं और **बदले नहीं जा सकते।**  
✅ **Props का उपयोग** Parent-Child Communication के लिए किया जाता है।  
✅ **State को Parent में रखकर Props के रूप में भेज सकते हैं** ताकि Child भी उसे अपडेट कर सके।  

अगर आपको और डिटेल चाहिए या कोई Example समझना हो, तो बताइए! 😊🚀
