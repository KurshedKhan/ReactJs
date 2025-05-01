# Passing Functions via Props in React: Basic to Advanced

## 1. Introduction
React में `props` के माध्यम से फ़ंक्शन्स को पास करना एक सामान्य पैटर्न है। इससे पैरेंट कंपोनेंट चाइल्ड कंपोनेंट के व्यवहार को नियंत्रित कर सकता है।

---

## 2. Basic Function Passing
सबसे साधारण तरीका यह है कि एक फ़ंक्शन को पैरेंट से चाइल्ड में `props` के रूप में पास करें।

```jsx
const Child = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me</button>;
};

const Parent = () => {
  const showMessage = () => {
    alert("Button clicked in Child Component");
  };
  return <Child handleClick={showMessage} />;
};

export default Parent;
```

---

## 3. Passing Functions with Arguments
कभी-कभी हमें पैरेंट से फ़ंक्शन पास करने के दौरान आर्गुमेंट्स भी देने की आवश्यकता होती है।

```jsx
const Child = ({ handleClick }) => {
  return <button onClick={() => handleClick("Hello from Child")}>Click Me</button>;
};

const Parent = () => {
  const showMessage = (message) => {
    alert(message);
  };
  return <Child handleClick={showMessage} />;
};
```

---

## 4. Passing Functions for State Management
कई बार पैरेंट का स्टेट अपडेट करने के लिए चाइल्ड में फ़ंक्शन पास किया जाता है।

```jsx
import { useState } from "react";

const Child = ({ increment }) => {
  return <button onClick={increment}>Increment</button>;
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child increment={incrementCount} />
    </div>
  );
};
```

---

## 5. Passing Callback Functions
कभी-कभी पैरेंट को चाइल्ड से डेटा प्राप्त करने की आवश्यकता होती है।

```jsx
const Child = ({ sendData }) => {
  return <button onClick={() => sendData("Data from Child")}>Send Data</button>;
};

const Parent = () => {
  const handleData = (data) => {
    console.log("Received:", data);
  };
  return <Child sendData={handleData} />;
};
```

---

## 6. Using Higher-Order Functions (HOFs)
React में हाई-ऑर्डर फ़ंक्शन्स का उपयोग करके अधिक फ्लेक्सिबिलिटी पाई जा सकती है।

```jsx
const Child = ({ createHandler }) => {
  return <button onClick={createHandler("Dynamic Message")}>Click Me</button>;
};

const Parent = () => {
  const generateHandler = (message) => () => {
    alert(message);
  };

  return <Child createHandler={generateHandler} />;
};
```

---

## 7. Passing Asynchronous Functions
React में असिंक्रोनस ऑपरेशन्स (जैसे API कॉल्स) के लिए फ़ंक्शन पास किए जा सकते हैं।

```jsx
const Child = ({ fetchData }) => {
  return <button onClick={fetchData}>Fetch Data</button>;
};

const Parent = () => {
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  };
  return <Child fetchData={fetchData} />;
};
```

---

## 8. Using `useCallback` for Optimization
अगर फ़ंक्शन बार-बार रीक्रिएट हो रहा है, तो `useCallback` का उपयोग करें।

```jsx
import { useState, useCallback } from "react";

const Child = ({ increment }) => {
  return <button onClick={increment}>Increment</button>;
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child increment={incrementCount} />
    </div>
  );
};
```

---

## 9. Conclusion
React में फ़ंक्शन्स को `props` के माध्यम से पास करना अत्यंत उपयोगी होता है।
- **Basic Passing:** सिंपल फ़ंक्शन्स पास किए जा सकते हैं।
- **With Arguments:** पैरेंट से चाइल्ड में आर्गुमेंट्स पास करना संभव है।
- **State Management:** चाइल्ड पैरेंट के स्टेट को अपडेट कर सकता है।
- **Callbacks:** चाइल्ड डेटा को पैरेंट तक भेज सकता है।
- **Asynchronous Functions:** API कॉल्स को भी हैंडल किया जा सकता है।
- **Performance Optimization:** `useCallback` का उपयोग करके फ़ंक्शन को मेमोरी में स्टोर किया जा सकता है।

यह सभी पैटर्न React के स्केलेबल और परफॉर्मेंट ऐप्स बनाने में मदद करते हैं। 🚀
