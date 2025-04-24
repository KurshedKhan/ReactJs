# **Component in React (कंपोनेंट क्या है?)**  

React में **Component** UI (User Interface) बनाने के लिए सबसे महत्वपूर्ण हिस्सा होता है। **Component** का मतलब होता है **एक पुन: प्रयोज्य (Reusable) और स्वतंत्र (Independent) भाग** जो UI का एक टुकड़ा (Piece) दिखाता है।  

---  

## **1️⃣ Component क्या है? (What is a Component?)**  

🔹 **Definition (परिभाषा):**  
React में **Component** एक जावास्क्रिप्ट फ़ंक्शन या क्लास होती है जो HTML (JSX) को रेंडर करती है।  
React ऐप कई छोटे-छोटे Components से मिलकर बना होता है।  

🔹 **मुख्य विशेषताएँ (Key Features):**  
✅ **Reusable:** बार-बार इस्तेमाल किया जा सकता है।  
✅ **Independent:** एक Component दूसरे से स्वतंत्र होता है।  
✅ **Modular:** UI को छोटे-छोटे भागों में बांटने में मदद करता है।  

---  

## **2️⃣ Types of Components (कंपोनेंट के प्रकार)**  

React में दो प्रकार के Component होते हैं:  

### **1. Functional Component (फ़ंक्शनल कंपोनेंट)**  
👉 ये **साधारण JavaScript फ़ंक्शन्स** होते हैं जो UI रेंडर करते हैं।  
👉 ये **Hooks (useState, useEffect)** का उपयोग कर सकते हैं।  

🔹 **Example:**  
```javascript
import React from "react";

function Welcome() {
  return <h2>Welcome to React!</h2>;
}

export default Welcome;
```
✅ **यह एक सिंपल फ़ंक्शनल कंपोनेंट है जो "Welcome to React!" दिखाएगा।**  

---  

### **2. Class Component (क्लास कंपोनेंट)**  
👉 ये **JavaScript Class** होती हैं जो `React.Component` से Extends होती हैं।  
👉 पहले ये स्टेट और लाइफसाइकिल मेथड्स के लिए ज़्यादा इस्तेमाल होते थे, लेकिन अब **Functional Components + Hooks** का ज़्यादा उपयोग होता है।  

🔹 **Example:**  
```javascript
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Welcome to React!</h2>;
  }
}

export default Welcome;
```
✅ **यह एक क्लास कंपोनेंट है जो वही "Welcome to React!" दिखाएगा।**  

---  

## **3️⃣ Component का उपयोग कैसे करें? (How to Use a Component?)**  
React में Component को **Import और Use** करके UI में दिखाया जाता है।  

🔹 **Example:**  
```javascript
import React from "react";
import Welcome from "./Welcome"; // Component Import

function App() {
  return (
    <div>
      <Welcome />  {/* Component को इस्तेमाल कर रहे हैं */}
    </div>
  );
}

export default App;
```
✅ **अब `Welcome` Component `App` Component में Render होगा।**  

---  

## **4️⃣ Props & State in Component (प्रॉप्स और स्टेट)**  

### **✅ Props (प्रॉप्स) क्या होते हैं?**  
👉 **Props (Properties) वे डाटा होते हैं जो एक Component दूसरे को भेजता है।**  
👉 ये **Read-Only** होते हैं और Parent से Child को भेजे जाते हैं।  

🔹 **Example:**  
```javascript
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return <Welcome name="Kurshed" />;
}
```
✅ यहाँ `Welcome` Component `name` प्रॉप के जरिए "Kurshed" दिखाएगा।  

---  

### **✅ State (स्टेट) क्या होती है?**  
👉 State किसी Component की **डायनामिक Data** होती है जो बदल सकती है।  
👉 Functional Components में `useState()` और Class Components में `this.state` से स्टेट को मैनेज किया जाता है।  

🔹 **Example (Functional Component with useState):**  
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
✅ **जब बटन दबाया जाएगा, तो `count` बढ़ेगा और Component फिर से Render होगा।**  

---  

## **5️⃣ Component के फायदे (Advantages of Components)**  
🔹 **Code Reusability:** एक ही Component को बार-बार इस्तेमाल किया जा सकता है।  
🔹 **Maintainability:** कोड को छोटे-छोटे हिस्सों में बांटने से आसानी से मैनेज किया जा सकता है।  
🔹 **Performance:** Unnecessary Re-Rendering को `React.memo()` से रोक सकते हैं।  
🔹 **Modular Approach:** UI को छोटे-छोटे Blocks में Divide करना आसान होता है।  

---  

## **📌 निष्कर्ष (Conclusion)**  
✅ **Component** React का मुख्य भाग है जो UI को बनाता है।  
✅ **Functional और Class Components** दो प्रकार के Component होते हैं।  
✅ **Props और State** का उपयोग डेटा पास करने और स्टोर करने के लिए किया जाता है।  
✅ **Components को Reusable और Modular बनाना Best Practice है।**  

अगर आपको कोई और Example चाहिए या गहराई से समझना है, तो बताइए! 😊🚀  
