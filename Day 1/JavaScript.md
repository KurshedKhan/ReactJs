# 📘 React Notes

# 🤔 Problems with JavaScript (Traditional) and Why Use React

## ❌ Problems with Vanilla JavaScript

### 1. **Manual DOM Manipulation**
- You have to write code to **select**, **update**, and **delete** DOM elements.
- Can become complex and error-prone in large apps.

```js
document.getElementById('app').innerHTML = '<p>Hello</p>';
```

### 2. Spaghetti Code
- Mixing HTML, CSS, and JS logic in one place often leads to unorganized code.
- Difficult to maintain and debug.

### 3. No Component Reusability
- Traditional JS lacks a built-in way to reuse UI elements across the app.

### 4. Difficult State Management
- Managing UI state (e.g. button clicks, form input) across multiple elements is hard without a structured system.

### 5. No Virtual DOM
- Updates are applied directly to the DOM, which can be slow and lead to poor performance in large applications.