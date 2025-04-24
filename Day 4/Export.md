# **React में Export और Export Default का डीप डाइव (Deep Dive) - हिंदी और अंग्रेज़ी में**  

React में **`export`** और **`export default`** ES6 मॉड्यूल सिस्टम का हिस्सा हैं। इनका उपयोग कोड को एक फ़ाइल से दूसरी फ़ाइल में साझा (share) करने के लिए किया जाता है। React में, हम अक्सर इनका उपयोग **कंपोनेंट्स, फंक्शंस, और वेरिएबल्स** को एक्सपोर्ट करने के लिए करते हैं। आइए इसे विस्तार से समझते हैं।  

---

## **1. Export क्या है? (What is Export?)**  

JavaScript में, किसी भी मॉड्यूल से डेटा या फंक्शन को एक्सपोर्ट करने के लिए दो मुख्य तरीके होते हैं:  

1. **Named Export (`export {}`)**  
2. **Default Export (`export default`)**  

🚀 **Export का मुख्य उद्देश्य कोड को मॉड्यूलर (modular) और पुन: उपयोग योग्य (reusable) बनाना है।**  

---

## **2. Named Export क्या है? (What is Named Export?)**  

**Named Export** का उपयोग तब किया जाता है जब हम एक ही फ़ाइल से **एक से अधिक आइटम (functions, variables, classes, आदि)** को एक्सपोर्ट करना चाहते हैं।  

### **🔹 Named Export का सिंटैक्स (Syntax of Named Export)**  

```javascript
// utils.js
export const name = "React";
export function greet() {
  return "Hello, World!";
}
export class MyClass {
  constructor() {
    console.log("MyClass instantiated");
  }
}
```

### **🔹 Named Export को Import करना (Importing Named Export)**  

```javascript
// app.js
import { name, greet, MyClass } from "./utils";

console.log(name); // Output: React
console.log(greet()); // Output: Hello, World!
const obj = new MyClass(); // Output: MyClass instantiated
```

---

## **3. Default Export क्या है? (What is Default Export?)**  

### **🔹 Default Export का सिंटैक्स (Syntax of Default Export)**  

```javascript
// MyComponent.js
function MyComponent() {
  return <h1>Hello, React!</h1>;
}

export default MyComponent;
```

### **🔹 Default Export को Import करना (Importing Default Export)**  

```javascript
// App.js
import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
```

---

## **4. Named Export बनाम Default Export (Named Export vs Default Export)**  

| Feature               | Default Export                | Named Export                   |
|-----------------------|------------------------------|--------------------------------|
| **Export कैसे करें?** | `export default Component;` | `export { Component };`       |
| **Import कैसे करें?** | `import Component from "..."` | `import { Component } from "..."` |
| **Braces (`{}`) की ज़रूरत?** | ❌ नहीं | ✅ हाँ |
| **Import नाम बदला जा सकता है?** | ✅ हाँ | ❌ नहीं |

---

## **5. Export और Import में सामान्य गलतियाँ (Common Mistakes in Export & Import)**  

🚫 **1. Default Export को `{}` के अंदर इम्पोर्ट करना**  
```javascript
import { MyComponent } from "./MyComponent"; // ❌ गलत
```
✅ **सही तरीका:**  
```javascript
import MyComponent from "./MyComponent"; // ✅ सही
```

🚫 **2. Named Export को बिना `{}` के इम्पोर्ट करना**  
```javascript
import greet from "./utils"; // ❌ गलत
```
✅ **सही तरीका:**  
```javascript
import { greet } from "./utils"; // ✅ सही
```

---

## **6. कब उपयोग करें? (When to Use `export` and `export default`?)**  

✅ **Named Export:**  
- जब **एक से अधिक आइटम** एक्सपोर्ट करने हों।  
- जब **स्पष्ट नाम** बनाए रखना ज़रूरी हो।  
- जब **विभिन्न यूटिलिटी फंक्शंस** एक्सपोर्ट करने हों।  

✅ **Default Export:**  
- जब फ़ाइल में **सिर्फ एक ही मुख्य आइटम** हो।  
- जब उपयोगकर्ता को **कोई भी नाम चुनने की स्वतंत्रता** हो।  
- जब कोई **Reusable Component या Utility Function** हो।  

🚀 **React में, हम आमतौर पर Component को `export default` के रूप में एक्सपोर्ट करते हैं, लेकिन hooks और utilities के लिए Named Export का उपयोग करते हैं।**  

---

## **7. निष्कर्ष (Conclusion)**  

- `export` और `export default` दोनों **कोड मॉड्यूलरिटी और पुन: उपयोग** को बढ़ाने में मदद करते हैं।  
- `Named Export` कई आइटम्स के लिए बेहतर है, जबकि `Default Export` एकल आइटम के लिए उपयुक्त है।  
- **Named Export को `{}` के साथ इम्पोर्ट करना पड़ता है, लेकिन Default Export को नहीं।**  

🎯 **React और JavaScript में बेहतर कोडिंग के लिए दोनों एक्सपोर्ट मेथड को समझना ज़रूरी है!** 🚀
