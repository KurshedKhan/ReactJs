# 🚀 React.js में `map()` मेथड - बेसिक से एडवांस तक (Basic to Advanced)

`map()` मेथड एक शक्तिशाली JavaScript एरे मेथड है जिसका उपयोग React.js में लिस्ट को रेंडर करने के लिए किया जाता है। इस गाइड में हम `map()` के बेसिक से लेकर एडवांस तक सभी पहलुओं को कवर करेंगे।

---

## 1️⃣ `map()` क्या है? (What is `map()`?)

`map()` एक JavaScript एरे मेथड है जो प्रत्येक एलेमेंट पर एक फंक्शन को अप्लाई करता है और एक नया एरे रिटर्न करता है।

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

😃 **Happy Learning!** यह मेथड React.js में लिस्ट आइटम्स को डायनामिक रूप से रेंडर करने में बहुत उपयोगी है।

---

## 2️⃣ React में `map()` का उपयोग (Using `map()` in React)

React में `map()` का उपयोग लिस्ट को रेंडर करने के लिए किया जाता है।

```jsx
function ListComponent() {
  const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

😊 **Exciting!** `key` प्रॉप्स का उपयोग करना आवश्यक है ताकि React प्रत्येक आइटम को सही से ट्रैक कर सके।

---

## 3️⃣ ऑब्जेक्ट्स की लिस्ट रेंडर करना (Rendering a List of Objects)

```jsx
function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

🤩 **Amazing!** `map()` ऑब्जेक्ट्स की लिस्ट को आसानी से रेंडर कर सकता है।

---

## 4️⃣ कंडीशनल रेंडरिंग के साथ `map()` (Using `map()` with Conditional Rendering)

```jsx
function ActiveUsers() {
  const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true }
  ];

  return (
    <ul>
      {users.map(user => user.active && <li key={user.id}>{user.name} ✅</li>)}
    </ul>
  );
}
```

🤔 **Interesting!** `map()` के साथ `&&` का उपयोग करके केवल एक्टिव यूजर्स को दिखा सकते हैं।

---

## 5️⃣ `map()` का उपयोग कंपोनेंट्स के साथ (Using `map()` with Components)

```jsx
function User({ name }) {
  return <li>👤 {name}</li>;
}

function UserList() {
  const users = ['Alice', 'Bob', 'Charlie'];
  
  return (
    <ul>
      {users.map((user, index) => (
        <User key={index} name={user} />
      ))}
    </ul>
  );
}
```

😎 **Cool!** `map()` को कंपोनेंट्स के साथ इस्तेमाल करना कोड को और भी क्लीन बनाता है।

---

## 6️⃣ `map()` और `filter()` को मिलाकर उपयोग करना (Combining `map()` and `filter()`)

```jsx
function FilteredUsers() {
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Charlie', age: 22 }
  ];

  return (
    <ul>
      {users.filter(user => user.age >= 18).map(user => (
        <li key={user.id}>{user.name} (Adult) 🎉</li>
      ))}
    </ul>
  );
}
```

🤯 **Mind-blowing!** `filter()` और `map()` का कॉम्बिनेशन डेटा को फ़िल्टर करके रेंडर करने में मदद करता है।

---

## 7️⃣ `map()` के साथ इंडेक्स का सही उपयोग (Handling Index Correctly with `map()`)

```jsx
const items = ['First', 'Second', 'Third'];

const List = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{index + 1}. {item}</li>
    ))}
  </ul>
);
```

😇 **Be Careful!** अगर डेटा डायनामिक है, तो `index` को `key` के रूप में उपयोग करना अच्छा नहीं होता।

---

## 🎯 निष्कर्ष (Conclusion)

| मेथड | उपयोग |
|--------|---------|
| `map()` | लिस्ट को इटरेट करने और नया एरे बनाने के लिए |
| `map() + JSX` | React में डायनामिक लिस्ट रेंडर करने के लिए |
| `map() + filter()` | फ़िल्टर्ड लिस्ट रेंडर करने के लिए |
| `map()` with Components | बेहतर रीयूजेबलिटी के लिए |

🔥 **अब आप React.js में `map()` मेथड के मास्टर बन चुके हैं!** 🎉

अगर आपको यह गाइड पसंद आई हो, तो इसे शेयर करना ना भूलें! 🚀
