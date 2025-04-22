# 📘 React Notes

## 💡 Key Concepts Explained

### 🔄 Dynamic & Interactive User Interface
- **Dynamic** means the UI can **change in real-time** based on user actions or data updates.
- **Interactive** means the user can **interact with elements** like buttons, forms, and the app will respond immediately.
- In React, this is made possible using **state** and **event handling**.

```jsx
function ClickMe() {
  const [text, setText] = useState("Click the button!");
  
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Button clicked!")}>Click Me</button>
    </div>
  );
}
```

---

### 🧭 Single Page Application (SPA)
- An **SPA** loads a **single HTML page** and dynamically updates the content as the user interacts with the app.
- It **doesn't reload the entire page** from the server.
- React uses a **virtual DOM and client-side routing** to make SPAs feel fast and seamless.

#### Benefits of SPA in React:
- Faster user experience
- Reduced server load
- Smoother navigation (no page flickering)
- Works well with APIs and modern web features
