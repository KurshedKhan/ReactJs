Here's a **basic to advanced Markdown (.md) note file** on the `style` attribute in React. You can copy and save it as `react-style-attribute.md`.

---

# React `style` Attribute Notes (Basic to Advanced)

## 📌 Introduction
In React, inline styles are specified using the `style` attribute, but instead of a string, you pass a **JavaScript object**.

---

## ✅ Basic Syntax

```jsx
const element = <h1 style={{ color: 'blue', fontSize: '20px' }}>Hello World</h1>;
```

- Use **camelCase** for CSS properties: `backgroundColor`, `fontSize`, etc.
- The values must be **strings** or **numbers**.

---

## ⚙️ Dynamic Styling

You can apply styles dynamically using variables or expressions.

```jsx
const isRed = true;
const styles = {
  color: isRed ? 'red' : 'green',
  fontWeight: 'bold'
};

return <p style={styles}>Styled Paragraph</p>;
```

---

## 🧠 Combining Styles

Use the spread operator or `Object.assign()` to combine styles.

```jsx
const baseStyle = { color: 'black', fontSize: '16px' };
const highlight = { backgroundColor: 'yellow' };

const combined = { ...baseStyle, ...highlight };

return <div style={combined}>Merged Styles</div>;
```

---

## 📏 Units in Styles

- **Numbers** are interpreted as **px** (pixels).
- Use strings for other units like `%`, `em`, `vh`, etc.

```jsx
const box = <div style={{ width: 100, height: '50vh' }}>Box</div>;
```

---

## 🔁 Styling with Loops

You can generate styles in loops, useful for mapping components.

```jsx
const items = [1, 2, 3];
return items.map(i => (
  <div key={i} style={{ marginTop: i * 10 }}>Item {i}</div>
));
```

---

## 🎨 Pseudo-Classes & Media Queries (Limitations)

React's `style` attribute does **not** support:

- `:hover`, `:focus`, etc.
- Media queries

Use **CSS modules**, **styled-components**, or **external CSS** for that.

---

## 🧩 Style Objects in Separate Files

You can define reusable styles in external JS files.

```js
// styles.js
export const headingStyle = {
  color: 'teal',
  textAlign: 'center',
};
```

```jsx
import { headingStyle } from './styles';

<h1 style={headingStyle}>Reusable Style</h1>
```

---

## 🧠 Best Practices

- Use inline styles for dynamic or conditional styling.
- Prefer CSS/SCSS for layout, media queries, or pseudo-classes.
- Keep inline style objects **outside** of render methods to avoid re-creation.

---

## 💡 Alternative: Styled Components (for Advanced Styling)

If styling gets complex, consider using libraries like:

- **styled-components**
- **emotion**
- **CSS Modules**

---

## 🧪 Mini Project Example

```jsx
function StyledCard({ isActive }) {
  const cardStyle = {
    border: '1px solid gray',
    padding: '20px',
    backgroundColor: isActive ? 'lightgreen' : 'lightgray',
    transition: 'background 0.3s ease'
  };

  return <div style={cardStyle}>Card is {isActive ? 'Active' : 'Inactive'}</div>;
}
```

---

## 📚 Summary

| Feature               | Supported in style attr |
|----------------------|--------------------------|
| Inline CSS           | ✅ Yes                  |
| Dynamic styling      | ✅ Yes                  |
| Media queries        | ❌ No                   |
| Pseudo-classes       | ❌ No                   |
| Combining styles     | ✅ Yes                  |
| Reusability          | ⚠️ Limited              |

---

```