# React Children Props: Basic to Advanced

## 1. Introduction
`children` prop React में एक विशेष prop है, जिसका उपयोग एक कंपोनेंट के अंदर अन्य JSX या कंपोनेंट पास करने के लिए किया जाता है।

---

## 2. Basic Usage of `children`
React में `children` props को एक्सेस करने के लिए `props.children` का उपयोग किया जाता है।

```jsx
const Wrapper = (props) => {
  return <div className="wrapper">{props.children}</div>;
};

const App = () => {
  return (
    <Wrapper>
      <h1>Hello, World!</h1>
    </Wrapper>
  );
};

export default App;
```
**Output:**
```
<div class="wrapper">
  <h1>Hello, World!</h1>
</div>
```

---

## 3. Using `children` with Functional Components
आप `children` को `props.children` या `({ children })` के रूप में एक्सेस कर सकते हैं।

```jsx
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const App = () => {
  return (
    <Card>
      <p>This is inside the Card component</p>
    </Card>
  );
};
```

---

## 4. `React.Children.map` & `React.Children.forEach`
React में `children` को मैनेज करने के लिए `React.Children` API का उपयोग किया जाता है।

```jsx
const List = ({ children }) => {
  return (
    <ul>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <List>
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </List>
  );
};
```
**Output:**
```
<ul>
  <li><span>Item 1</span></li>
  <li><span>Item 2</span></li>
  <li><span>Item 3</span></li>
</ul>
```

---

## 5. Conditional Rendering with `children`

```jsx
const ConditionalWrapper = ({ children, condition }) => {
  return condition ? <div className="highlight">{children}</div> : children;
};

const App = () => {
  return (
    <ConditionalWrapper condition={true}>
      <p>Conditionally Wrapped Content</p>
    </ConditionalWrapper>
  );
};
```

---

## 6. Passing Functions as Children
आप `children` को एक फ़ंक्शन के रूप में भी पास कर सकते हैं।

```jsx
const RenderPropComponent = ({ children }) => {
  return <div>{children("Hello from Render Prop")}</div>;
};

const App = () => {
  return (
    <RenderPropComponent>
      {(message) => <h2>{message}</h2>}
    </RenderPropComponent>
  );
};
```

---

## 7. Cloning and Manipulating `children` using `React.cloneElement`
जब आपको `children` को मॉडिफाई करने की जरूरत हो, तब `React.cloneElement` का उपयोग कर सकते हैं।

```jsx
const Parent = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { style: { color: "blue" } });
  });
};

const App = () => {
  return (
    <Parent>
      <p>This text will be blue</p>
      <h3>This heading will also be blue</h3>
    </Parent>
  );
};
```

---

## 8. Conclusion
React का `children` prop एक पावरफुल फीचर है जो कंपोनेंट्स को अधिक फ्लेक्सिबल और री-यूजेबल बनाता है। यह बेसिक JSX पास करने से लेकर एडवांस्ड हायर-ऑर्डर कंपोनेंट्स और `React.cloneElement` तक कई उपयोग मामलों में मदद करता है।
