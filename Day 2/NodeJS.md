# 🌐 What is Node.js? (Node.js क्या है?)

**Node.js** एक ओपन-सोर्स, क्रॉस-प्लेटफॉर्म JavaScript रनटाइम है जो ब्राउज़र के बाहर JavaScript को रन करने के लिए बनाया गया है।

---

## ✅ Definition (परिभाषा)
**Node.js** is a runtime environment that allows you to run JavaScript code outside of the browser — mainly used for building fast and scalable server-side applications.

**Node.js** एक ऐसा वातावरण (Environment) है जो JavaScript को ब्राउज़र के बाहर, जैसे कि सर्वर पर रन करने की अनुमति देता है।

---

## ✅ Why Use Node.js? (Node.js का उपयोग क्यों करें?)

🔹 **Fast Execution:** Chrome’s V8 Engine पर आधारित है — तेज़ रनटाइम।  
🔹 **Event-Driven & Non-blocking:** एक साथ कई क्लाइंट्स को हैंडल करता है।  
🔹 **JavaScript Everywhere:** Frontend और Backend दोनों में एक ही भाषा का उपयोग।  
🔹 **NPM (Node Package Manager):** हज़ारों पैकेजेस उपलब्ध।  
🔹 **Scalability:** हल्के सर्वर ऐप्स से लेकर बड़े-बड़े APIs तक के लिए बढ़िया।

---

## ✅ Key Features (मुख्य विशेषताएँ)

| Feature | English | हिंदी |
|--------|---------|--------|
| ⚡ Fast | Uses Google’s V8 Engine | तेज़ प्रदर्शन |
| 🔄 Asynchronous | Non-blocking I/O | नॉन-ब्लॉकिंग इनपुट/आउटपुट |
| 📦 NPM | Built-in package manager | पैकेज मैनेजर उपलब्ध |
| 🌐 Cross-Platform | Windows, Mac, Linux पर चलता है | हर प्लेटफ़ॉर्म पर उपलब्ध |
| 🧩 Modular | Code को Modules में बांट सकते हैं | मॉड्यूलर आर्किटेक्चर |

---

## ✅ Use Cases of Node.js (Node.js का उपयोग कहाँ होता है?)

🔸 Real-time Chat Applications  
🔸 RESTful APIs और Backend Services  
🔸 Streaming Services  
🔸 Command-line Tools  
🔸 IoT और Microservices  

---

## ✅ Example: Simple Node.js Server

```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

# 📌 Save this file as server.js and run using:

---
// node server.js

## ✅ Benefits (Node.js के फायदे)

🔹 Fast and Lightweight
🔹 Easy to Learn (JavaScript आधारित)
🔹 Rich Ecosystem (NPM)
🔹 Huge Community Support
🔹 Great for Real-Time Apps

---
# 📌 Conclusion (निष्कर्ष)
## ✅ Node.js सर्वर-साइड डेवलपमेंट के लिए एक शक्तिशाली टूल है।
## ✅ यह JavaScript को फुल-स्टैक लैंग्वेज बनाता है।
## ✅ Beginners और Professionals दोनों के लिए उपयोगी।

Start using Node.js today for building modern web applications! 🚀