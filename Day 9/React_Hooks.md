## **React Hooks (रीऐक्ट हुक्स) – हिंदी और इंग्लिश में विस्तृत जानकारी**  

### **React Hooks क्या हैं?**  
React Hooks वे फ़ंक्शन हैं जो आपको क्लास-कॉम्पोनेंट लिखे बिना React के फ़ीचर्स (जैसे स्टेट और लाइफसाइकिल मेथड्स) को उपयोग करने की अनुमति देते हैं। Hooks React 16.8 में पेश किए गए थे और ये फ़ंक्शनल कॉम्पोनेंट को अधिक शक्तिशाली बनाते हैं।  

> **React Hooks allow functional components to use state and other React features without writing class components. They were introduced in React 16.8.**

---

## **मुख्य React Hooks (Major React Hooks)**  

### **1. useState Hook**  
यह Hook किसी फ़ंक्शनल कॉम्पोनेंट में **state variable** जोड़ने के लिए उपयोग किया जाता है।  

#### **उदाहरण (Example)**  
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // स्टेट वेरिएबल बनाना

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

---

### **2. useEffect Hook**  
यह Hook साइड इफेक्ट्स (जैसे API कॉल, डेटा फ़ेचिंग, या DOM अपडेट) को हैंडल करने के लिए उपयोग किया जाता है।  

#### **उदाहरण (Example)**  
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component updated!'); // जब भी count अपडेट होगा, यह चलेगा
  }, [count]); // Dependency array - सिर्फ count के बदलने पर चलेगा

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Timer;
```

---

### **3. useContext Hook**  
यह Hook React के **Context API** को उपयोग करने के लिए है, जिससे हम डेटा को बिना props drilling के साझा कर सकते हैं।  

#### **उदाहरण (Example)**  
```jsx
import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function UserProfile() {
  const user = useContext(UserContext); // Context से डेटा प्राप्त करना
  return <h1>Welcome, {user.name}!</h1>;
}

function App() {
  return (
    <UserContext.Provider value={{ name: 'Kurshed' }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
```

---

### **4. useRef Hook**  
यह Hook **DOM element को directly manipulate** करने और mutable value स्टोर करने के लिए उपयोग किया जाता है।  

#### **उदाहरण (Example)**  
```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Input field पर फोकस करें
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```

---

### **5. useReducer Hook**  
यह `useState` का एक उन्नत संस्करण है और तब उपयोगी होता है जब state management अधिक जटिल होता है।  

#### **उदाहरण (Example)**  
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
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;
```

---

### **अन्य महत्वपूर्ण Hooks (Other Important Hooks)**  

| Hook | उपयोग (Usage) |
|------|--------------|
| `useMemo` | Performance optimization के लिए expensive calculations को cache करता है। |
| `useCallback` | Functions को memoize करता है ताकि वे हर render पर नई न बनें। |
| `useLayoutEffect` | `useEffect` जैसा ही है लेकिन DOM अपडेट के तुरंत बाद चलता है। |
| `useImperativeHandle` | `ref` को कस्टम methods देने के लिए उपयोग होता है। |

---

## **Hooks के फायदे (Advantages of Hooks)**  
✅ **Simple & Readable:** कोड को सरल और पढ़ने में आसान बनाते हैं।  
✅ **Reusability:** Hooks को कस्टम बनाया जा सकता है और अन्य Components में इस्तेमाल किया जा सकता है।  
✅ **No Class Components:** क्लास लिखने की ज़रूरत नहीं होती, जिससे कोड कमplex नहीं होता।  
✅ **Performance:** Unnecessary renders को रोककर प्रदर्शन सुधारते हैं।  

---

## **निष्कर्ष (Conclusion)**  
React Hooks ने फ़ंक्शनल कॉम्पोनेंट्स को बहुत शक्तिशाली बना दिया है। `useState`, `useEffect`, `useContext`, और अन्य hooks का सही उपयोग करने से कोड मॉड्यूलर और तेज़ बनता है।  
Hooks का अभ्यास करके React में बेहतर डेवलपर बना जा सकता है! 🚀  

अगर कोई सवाल हो, तो पूछ सकते हैं! 😊
