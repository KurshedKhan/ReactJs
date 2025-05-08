# Render और Re-Render in React (रेंडर और री-रेंडर)

React में **Render** और **Re-Render** का बहुत महत्वपूर्ण रोल होता है।  
अगर आपको React में UI अपडेट करना और उसकी Performance समझनी है, तो **Render और Re-Render को अच्छे से समझना जरूरी है।**  

---  

## 1️⃣ Render (रेंडर) क्या होता है?  

### 📌 Definition:  
**Render का मतलब है Component को पहली बार DOM (डॉक्यूमेंट ऑब्जेक्ट मॉडल) में दिखाना।**  
जब कोई Component **React द्वारा पहली बार बनाया जाता है और ब्राउज़र में दिखाया जाता है, तो उसे "Render" कहते हैं।**  

### 📌 Render कब होता है?  
1. जब **React App लोड होता है**, तो Component **पहली बार Render होता है।**  
2. जब **Parent Component Render होता है**, तो उसके सभी **Child Component भी Render हो सकते हैं।**  

### 📌 Example – Simple Render  
```javascript
import React from "react";

function Welcome() {
  return <h2>Welcome to React!</h2>;
}

export default Welcome;
```
✅ **यह Component पहली बार Render होगा जब इसे किसी Parent Component में Use किया जाएगा।**  

---

## 2️⃣ Re-Render (री-रेंडर) क्या होता है?  

### 📌 Definition:  
जब कोई Component पहले से Render हो चुका होता है और किसी कारण से फिर से Update होकर दुबारा Render होता है,  
तो इसे **Re-Render (दोबारा रेंडर होना) कहते हैं।**  

### 📌 Re-Render कब होता है?  
✅ **जब किसी Component की State या Props बदलते हैं।**  
✅ **जब Parent Component Re-Render होता है, तो उसके सभी Child Component भी Re-Render हो सकते हैं।**  

### 📌 Example – Re-Render using State  
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
✅ **जब बटन दबाया जाएगा, तो `setCount` State को अपडेट करेगा, और Component फिर से Re-Render होगा।**  
✅ **Re-Render के बाद नया `count` वैल्यू UI में दिखेगा।**  

---

## 3️⃣ Render vs Re-Render (रेंडर और री-रेंडर में अंतर)  

| Feature | Render (रेंडर) | Re-Render (री-रेंडर) |
|---------|---------------|------------------|
| **Definition** | पहली बार Component का UI बनाना | Component के दोबारा अपडेट होकर दिखने की प्रक्रिया |
| **Trigger कब होता है?** | जब Component पहली बार लोड होता है | जब State, Props, या Parent Component बदलता है |
| **Example** | `return <h2>Hello!</h2>` | `useState()` के कारण Component का दोबारा Render होना |
| **Performance Impact** | कम CPU और Memory उपयोग करता है | ज्यादा Re-Render होने से Performance Slow हो सकती है |

---

## 4️⃣ Re-Render को Optimize कैसे करें?  

React में **अवश्यकता से अधिक Re-Render होने से Performance कम हो सकती है।**  
इसलिए **React में कुछ तकनीकें होती हैं, जिससे Unnecessary Re-Renders को कम किया जा सकता है।**  

### ✅ 1. `React.memo()` – Component को Memoize करना  
अगर कोई Component बार-बार Re-Render हो रहा है लेकिन उसके Props नहीं बदल रहे हैं, तो हम उसे **`React.memo()`** का उपयोग करके Optimize कर सकते हैं।  
```javascript
import React from "react";

const Message = React.memo(({ text }) => {
  console.log("Re-Render हुआ!");
  return <h2>{text}</h2>;
});

export default Message;
```
✅ **अब यह Component तभी Re-Render होगा जब `text` Props बदलेगा।**  

### ✅ 2. `useCallback()` – Function Re-Creation रोकना  
अगर कोई Function हर बार Re-Create हो रहा है, तो उसे **`useCallback()`** के साथ Memoize किया जा सकता है।  
```javascript
import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  console.log("Child Re-Render हुआ!");
  return <button onClick={increment}>Increment</button>;
}

export default Parent;
```
✅ **अब `increment` function Re-Create नहीं होगा और Unnecessary Re-Render भी नहीं होगा।**  

---

## 🔹 निष्कर्ष (Conclusion)  
✅ **Render** → Component का पहली बार DOM में दिखना।  
✅ **Re-Render** → Component का UI किसी State या Props अपडेट होने पर फिर से दिखना।  
✅ **Re-Render को Optimize करने के लिए** → `React.memo()`, `useCallback()`, और `useMemo()` का उपयोग करें।  

अगर आपको कोई और Example चाहिए या गहराई से समझना है, तो बताइए! 😊🚀  
