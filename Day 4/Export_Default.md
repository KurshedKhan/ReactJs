# React में `export default` का डीप डाइव (Deep Dive) - हिंदी और अंग्रेज़ी में

React में `export default` JavaScript ES6 के `export` फीचर का एक हिस्सा है, जिसका उपयोग मॉड्यूल (modules) से डेटा, फंक्शंस, या कंपोनेंट्स को एक्सपोर्ट (export) करने के लिए किया जाता है। आइए इसे गहराई से समझते हैं।

---

## **1. `export default` क्या है? (What is `export default`?)**

JavaScript में, किसी भी मॉड्यूल से डेटा या फंक्शन को एक्सपोर्ट करने के लिए दो मुख्य तरीके होते हैं:

1. **Named Export (`export {}`)**
2. **Default Export (`export default`)**

`export default` का उपयोग तब किया जाता है जब हम किसी मॉड्यूल से केवल एक ही चीज़ को एक्सपोर्ट करना चाहते हैं।

---

## **2. Default Export का सिंटैक्स (Syntax of Default Export)**

```javascript
// MyComponent.js
function MyComponent() {
  return <h1>Hello, React!</h1>;
}

export default MyComponent;
```

ऊपर दिए गए उदाहरण में, `MyComponent` को `export default` का उपयोग करके एक्सपोर्ट किया गया है। अब हम इसे किसी और फ़ाइल में `import` कर सकते हैं।

---

## **3. Default Export को Import करना (Importing Default Export)**

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

🔹 ध्यान दें कि `import` करते समय, हम किसी भी नाम का उपयोग कर सकते हैं:

```javascript
import AnyName from "./MyComponent";
```

लेकिन, **Named Export** के विपरीत, `Default Export` को `{}` (curly braces) की आवश्यकता नहीं होती।

---

## **4. Default Export बनाम Named Export (Default vs Named Export)**

| Feature               | Default Export                | Named Export                   |
|-----------------------|------------------------------|--------------------------------|
| **Export कैसे करें?** | `export default Component;` | `export { Component };`       |
| **Import कैसे करें?** | `import Component from "..."` | `import { Component } from "..."` |
| **Braces (`{}`) की ज़रूरत?** | ❌ नहीं | ✅ हाँ |
| **Import नाम बदला जा सकता है?** | ✅ हाँ | ❌ नहीं |

### **उदाहरण: Named Export**
```javascript
// MyComponent.js
export function MyComponent() {
  return <h1>Hello, React!</h1>;
}
```
```javascript
// App.js
import { MyComponent } from "./MyComponent";
```

---

## **5. Default Export की लिमिटेशन (Limitations of Default Export)**

- एक मॉड्यूल में केवल **एक ही** `default export` हो सकता है।  
- Codebase में नाम बदलने से कन्फ्यूजन हो सकता है क्योंकि `default export` को किसी भी नाम से इम्पोर्ट किया जा सकता है।  

---

## **6. कब उपयोग करें? (When to Use `export default`?)**

✅ जब एक फ़ाइल में केवल **एक मुख्य कंपोनेंट** हो।  
✅ जब आप चाहते हैं कि इम्पोर्ट करने वाला कोई भी नाम चुन सके।  
✅ जब कोई **Reusable Component या Utility Function** हो।  

🚫 `Named Export` का उपयोग करें जब **एक ही फ़ाइल में कई एक्सपोर्ट्स** हों।  

---

## **निष्कर्ष (Conclusion)**

- `export default` का उपयोग **एक ही मुख्य एक्सपोर्ट** के लिए किया जाता है।  
- `import` के दौरान कोई भी नाम उपयोग किया जा सकता है।  
- **Named Export** और **Default Export** के अपने फायदे और नुकसान होते हैं, इसलिए स्थिति के अनुसार सही विकल्प चुनें।  

💡 **React में, हम आमतौर पर Component को `export default` के रूप में एक्सपोर्ट करते हैं, लेकिन hooks और utilities के लिए Named Export का उपयोग करते हैं।**
