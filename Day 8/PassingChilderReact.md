# React Children: Basic to Advanced

## 📌 Introduction
React `children` prop is a special property used to pass elements or components as children inside another component.

## 🟢 Basic Usage
```jsx
const Parent = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <Parent>
      <h1>Hello, World!</h1>
    </Parent>
  );
};
```

## 🔵 Handling Multiple Children
React allows multiple children inside a component.
```jsx
const Parent = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <Parent>
      <h1>Title</h1>
      <p>Description here...</p>
    </Parent>
  );
};
```

## 🟠 Using `React.Children`
React provides utilities to work with children safely.

### `React.Children.map`
```jsx
const Parent = ({ children }) => {
  return React.Children.map(children, (child) => (
    <div className="child-wrapper">{child}</div>
  ));
};
```

### `React.Children.count`
```jsx
const Parent = ({ children }) => {
  return <p>Total children: {React.Children.count(children)}</p>;
};
```

## 🟣 Filtering and Cloning Children

### `React.Children.toArray`
```jsx
const Parent = ({ children }) => {
  const filteredChildren = React.Children.toArray(children).slice(0, 1);
  return <div>{filteredChildren}</div>;
};
```

### `React.cloneElement`
Used to enhance child components with additional props.
```jsx
const Parent = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { style: { color: 'red' } });
  });
};
```

## 🔴 Context and Children
Children can also consume context data.
```jsx
const ThemeContext = React.createContext('light');

const Parent = ({ children }) => {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
};
```

## 🎯 Conclusion
- `children` allows nested components.
- `React.Children` utilities help manipulate children safely.
- `React.cloneElement` enhances child components.
- Context can be used with children.

This covers the fundamental to advanced aspects of `children` in React! 🚀
