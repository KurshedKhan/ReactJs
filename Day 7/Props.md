# React.js Props - Basic to Advanced (English & Hindi) 🚀

## 🔰 Introduction (परिचय)

Props (short for "Properties") are a way to pass data from one component to another in React. They are read-only and help in creating dynamic and reusable components. 🏗️

Props का उपयोग एक कंपोनेंट से दूसरे कंपोनेंट में डेटा भेजने के लिए किया जाता है। ये "read-only" होते हैं, जिससे हम डायनामिक और रीयूजेबल कंपोनेंट बना सकते हैं। 📩

---

## 🎯 1️⃣ Passing Props (प्रॉप्स भेजना)

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Kurshed" />;
}
```

📌 **Explanation (समझें)**:
- `props.name` के द्वारा "Kurshed" नाम पास किया गया।
- `Greeting` कंपोनेंट इसे `{props.name}` द्वारा दिखा रहा है।

✅ **Props are immutable (अपरिवर्तनीय होते हैं)**, यानी हम इन्हें कंपोनेंट के अंदर बदल नहीं सकते।

---

## 🛠️ 2️⃣ Destructuring Props (प्रॉप्स को डीस्ट्रक्चर करना)

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Kurshed" />;
}
```

📌 **Why? (क्यों?)**
- `props.name` बार-बार लिखने की ज़रूरत नहीं पड़ती।
- कोड ज्यादा साफ और पढ़ने में आसान हो जाता है।

---

## 🎭 3️⃣ Default Props (डिफ़ॉल्ट प्रॉप्स)

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting />;
}
```

📌 **Use Case (कब इस्तेमाल करें?)**
- जब प्रॉप्स ना मिले, तब एक डिफ़ॉल्ट वैल्यू सेट करना।
- ऊपर के उदाहरण में अगर `name` पास नहीं किया गया, तो "Guest" दिखेगा।

---

## 📦 4️⃣ Props with Multiple Values (एक से अधिक प्रॉप्स भेजना)

```jsx
function UserInfo({ name, age, country }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}

function App() {
  return <UserInfo name="Kurshed" age={25} country="India" />;
}
```

📌 **Advantage (फायदा)**: हम एक ही कंपोनेंट में कई डेटा पॉइंट्स पास कर सकते हैं।

---

## 🎨 5️⃣ Props as Functions (प्रॉप्स में फ़ंक्शन पास करना)

```jsx
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  const showAlert = () => alert("Button Clicked!");
  return <Button handleClick={showAlert} />;
}
```

📌 **Why? (क्यों ज़रूरी?)**
- Event handling के लिए फ़ंक्शन को प्रॉप्स के रूप में भेज सकते हैं।
- `handleClick` एक प्रॉप के रूप में `Button` कंपोनेंट में पास किया गया।

---

## 🏗️ 6️⃣ Props with Arrays & Objects (एरे और ऑब्जेक्ट्स पास करना)

```jsx
function ProductList({ products }) {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}

function App() {
  const items = ["Apple", "Banana", "Cherry"];
  return <ProductList products={items} />;
}
```

📌 **Key Points (मुख्य बातें)**
- `map()` का उपयोग करके लिस्ट को डायनामिक रूप से रेंडर किया गया।
- `key` का उपयोग अनोखा (unique) पहचानकर्ता देने के लिए किया जाता है।

---

## 🚀 7️⃣ Using `PropTypes` for Validation (प्रॉप्स का टाइप वेरिफिकेशन करना)

```jsx
import PropTypes from 'prop-types';

function User({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

📌 **Why use PropTypes? (क्यों ज़रूरी?)**
- यह सुनिश्चित करता है कि सही प्रकार (type) के डेटा पास किए जा रहे हैं।
- `isRequired` बताता है कि यह प्रॉप्स आवश्यक (mandatory) हैं।

---

## 🎯 Conclusion (निष्कर्ष)

| Concept | Description |
|---------|------------|
| Passing Props | Data को एक कंपोनेंट से दूसरे में भेजना |
| Destructuring | Props को आसान तरीके से एक्सेस करना |
| Default Props | डिफ़ॉल्ट वैल्यू सेट करना |
| Multiple Props | एक से अधिक वैल्यू भेजना |
| Props as Functions | Event handling के लिए फ़ंक्शन पास करना |
| Props with Arrays | डेटा को लिस्ट में दिखाना |
| PropTypes | प्रॉप्स वेलिडेशन करना |

🎉 **अब आप React में Props का मास्टर बन गए हैं!** 🚀 Happy Coding! 💻