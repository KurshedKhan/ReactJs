
# React Dynamic Components – Deep Dive

## 📌 What is a Dynamic Component?
Dynamic Components are components that are rendered based on dynamic data or input, rather than being statically declared in JSX.

---

## 🟢 Basic: Conditional Component Rendering

```jsx
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Welcome name="User" />;
  }
  return <h1>Please Sign In</h1>;
}
```

---

## 🟡 Intermediate: Dynamic Component Mapping

```jsx
const componentsMap = {
  home: HomePage,
  about: AboutPage,
  contact: ContactPage,
};

function DynamicComponentRenderer({ componentName }) {
  const ComponentToRender = componentsMap[componentName];
  return ComponentToRender ? <ComponentToRender /> : <p>Component not found</p>;
}
```

✅ This allows rendering different components based on user action or route.

---

## 🟠 Advanced: `React.lazy` and Dynamic Imports

```jsx
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

✅ Benefits:
- Code splitting
- Performance improvement
- Only loads when needed

---

## 🔵 Advanced: Higher-Order Dynamic Component

```jsx
function withLoader(Component) {
  return function LoaderWrapper({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}

const UserProfileWithLoader = withLoader(UserProfile);
```

✅ Useful for loading states or wrapping dynamic logic around any component.

---

## 🟣 Pro Level: Dynamic Props and Children

```jsx
function DynamicRenderer({ component: Component, props, children }) {
  return <Component {...props}>{children}</Component>;
}

// Usage:
<DynamicRenderer component="button" props={{ className: "btn" }}>
  Click Me
</DynamicRenderer>
```

✅ You can pass any component or HTML tag dynamically and render children too.

---

## 🧠 Tips and Best Practices

- Use `React.memo` or `useMemo` to avoid unnecessary re-renders.
- Always wrap lazy-loaded components with `<Suspense>`.
- Validate dynamic imports to avoid runtime errors.
- Maintain a consistent component map for large-scale apps.

---

## 📚 Real World Use Cases

- Route-based rendering (React Router)
- CMS-driven component rendering
- Dynamic form rendering
- UI builders (like page editors)
