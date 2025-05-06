# Handling Events in React: Basic to Advanced

## 1. Introduction
React में इवेंट हैंडलिंग HTML इवेंट्स के समान ही होती है, लेकिन सिंटैक्स थोड़ा अलग होता है।

---

## 2. Basic Event Handling
React में इवेंट हैंडलिंग के लिए JSX में CamelCase नामों का उपयोग किया जाता है।

```jsx
const ButtonClick = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

---

## 3. Passing Arguments in Event Handlers
इवेंट हैंडलर को आर्गुमेंट्स पास करने के लिए ऐरो फ़ंक्शन या `bind` का उपयोग किया जाता है।

```jsx
const ShowMessage = (message) => {
  alert(message);
};

const App = () => {
  return <button onClick={() => ShowMessage("Hello, React!")}>Show Alert</button>;
};
```

---

## 4. Synthetic Events in React
React इवेंट `SyntheticEvent` नामक एक व्रैपर का उपयोग करते हैं जो ब्राउज़र के इवेंट्स को नॉर्मलाइज़ करता है।

```jsx
const InputEvent = () => {
  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
  };
  
  return <input type="text" onChange={handleChange} placeholder="Type something..." />;
};
```

---

## 5. Event Handling with Class Components
क्लास कंपोनेंट्स में `this` बाइंडिंग आवश्यक होती है।

```jsx
class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.handleClick}>Clicked {this.state.count} times</button>
    );
  }
}
```

---

## 6. Preventing Default Behavior
React में `event.preventDefault()` का उपयोग किया जाता है।

```jsx
const FormSubmit = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};
```

---

## 7. Event Delegation
React में वर्चुअल DOM की वजह से इवेंट डेलीगेशन आसान होता है।

```jsx
const List = () => {
  const handleClick = (event) => {
    if (event.target.tagName === "LI") {
      alert(`You clicked on ${event.target.textContent}`);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};
```

---

## 8. Handling Multiple Events with a Single Function
एक ही हैंडलर का उपयोग कई इवेंट्स के लिए किया जा सकता है।

```jsx
const MultiEventHandler = () => {
  const handleEvent = (event) => {
    console.log(`Event Type: ${event.type}`);
  };

  return (
    <>
      <button onClick={handleEvent} onMouseOver={handleEvent}>Hover or Click</button>
    </>
  );
};
```

---

## 9. Custom Events in React
React में कस्टम इवेंट्स को `useState` और `useEffect` की मदद से हैंडल किया जा सकता है।

```jsx
import { useState, useEffect } from "react";

const CustomEventComponent = () => {
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    const handleCustomEvent = (e) => setMessage(e.detail);
    window.addEventListener("customEvent", handleCustomEvent);

    return () => window.removeEventListener("customEvent", handleCustomEvent);
  }, []);

  return (
    <>
      <h2>{message}</h2>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("customEvent", { detail: "New Message!" }))}
      >
        Trigger Custom Event
      </button>
    </>
  );
};
```

---

## 10. Conclusion
React में इवेंट हैंडलिंग सिंपल से एडवांस लेवल तक कई तरीकों से किया जा सकता है।
- `SyntheticEvent` React का एक महत्वपूर्ण कॉन्सेप्ट है।
- इवेंट हैंडलर को अलग-अलग तरीकों से परिभाषित किया जा सकता है।
- `React.Children.map`, `bind`, और `useEffect` के साथ कस्टम इवेंट मैनेज करना संभव है।
