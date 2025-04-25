
# ♻️ Reusable Components in React – Deep Dive

## 📌 What is a Reusable Component?
A **Reusable Component** is a component that can be used multiple times in different parts of the app with different props or configurations.

---

## 🟢 Basic Reusable Component Example

```jsx
function Button({ label, onClick, type = "button" }) {
  return <button type={type} onClick={onClick}>{label}</button>;
}

// Usage:
<Button label="Submit" onClick={handleSubmit} />
<Button label="Cancel" onClick={handleCancel} />
```

✅ This `Button` component can be reused anywhere with different labels and actions.

---

## 🟡 Props for Reusability

```jsx
function Card({ title, content, footer }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
}

// Usage:
<Card title="Info" content="This is info content" footer="Read More" />
```

✅ Using props makes components customizable and flexible.

---

## 🟠 Children Props for More Control

```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

// Usage:
<Container>
  <h1>Welcome</h1>
  <p>This is a reusable container</p>
</Container>
```

✅ The `children` prop allows nesting any JSX inside a component.

---

## 🔵 Higher-Order Components (HOC) for Reusability

```jsx
function withLogging(WrappedComponent) {
  return function LoggedComponent(props) {
    console.log('Rendering with props:', props);
    return <WrappedComponent {...props} />;
  };
}

const LoggedButton = withLogging(Button);
```

✅ Wrap functionality around components without modifying them.

---

## 🟣 Component Composition

```jsx
function PageLayout({ header, content, footer }) {
  return (
    <>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </>
  );
}

// Usage:
<PageLayout
  header={<Navbar />}
  content={<MainContent />}
  footer={<Footer />}
/>
```

✅ Compose components together to build flexible UI sections.

---

## 🧠 Best Practices for Reusability

- Keep components **small** and **focused**.
- Use **props** and **children** for flexibility.
- Avoid hard-coded data inside components.
- Group related logic inside reusable hooks if needed.
- Use `defaultProps` or default parameters.

---

## 📚 Real World Examples

- Reusable form inputs
- Modal component
- Toast/notification component
- Custom button/link wrapper
- Layout grids

---

## 🧩 Tools to Help

- `PropTypes` or TypeScript for prop validation
- Storybook for component isolation and reuse
- Component libraries (like Chakra UI, MUI)
