# 📌 CSS Modules in React - From Basics to Advanced 🎨

CSS Modules provide a way to scope styles locally to a component, preventing global style conflicts. Let's dive in! 🚀

---

## 🔹 **1. Basic Usage of CSS Modules in React**  

### 📂 **Step 1: Create a CSS Module File**
Create a `.module.css` file, e.g., `styles.module.css`  

```css
/* styles.module.css */
.container {
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
```

### 🛠 **Step 2: Import & Use in a React Component**
```jsx
import styles from './styles.module.css';

export default function App() {
  return <div className={styles.container}>Hello CSS Modules! 🎉</div>;
}
```
✅ **Benefit**: Styles are scoped only to this component, avoiding conflicts.

---

## 🔹 **2. Dynamic Class Names with `classnames`** 🎭

In React, sometimes we need to apply **multiple classes** or conditionally add a class **only if a condition is true**. The `classnames` package makes this easy.

### **📌 Step 1: Install `classnames`**
Run the following command in your project:
```sh
npm install classnames
```

### **📌 Step 2: Use `classnames` in Your Component**
```jsx
import styles from './styles.module.css';
import classNames from 'classnames'; // Import classnames

export default function App({ isActive, isDark }) {
  return (
    <div className={classNames(styles.container, { 
      [styles.active]: isActive, // Applies styles.active if isActive is true
      [styles.darkMode]: isDark  // Applies styles.darkMode if isDark is true
    })}>
      Dynamic Styling 🎭
    </div>
  );
}
```

### **📝 Explanation:**
- `classNames(styles.container, { ... })` applies **`styles.container` always**.
- `{ [styles.active]: isActive }` → Adds `styles.active` **if `isActive` is true**.
- `{ [styles.darkMode]: isDark }` → Adds `styles.darkMode` **if `isDark` is true**.

### **🔹 Example CSS (`styles.module.css`)**
```css
.container {
  padding: 20px;
  border-radius: 5px;
}

.active {
  color: red;
}

.darkMode {
  background: black;
  color: white;
}
```

### **🔹 Output Based on Props**
| `isActive`  | `isDark`  | Applied Classes |
|-------------|----------|----------------|
| `true`      | `false`  | `.container .active` |
| `false`     | `true`   | `.container .darkMode` |
| `true`      | `true`   | `.container .active .darkMode` |
| `false`     | `false`  | `.container` |

### **✨ Bonus: Using `classnames` with Arrays**
```jsx
const buttonClass = classNames(styles.btn, styles.primary, 'extra-class');
```
👉 This applies `.btn .primary .extra-class` to the element.

---

## 🔹 **3. CSS Modules with Global Styles 🌎**

For global styles (e.g., fonts, resets), use a normal `.css` file and import it in `index.js`.

```css
/* global.css */
body {
  font-family: Arial, sans-serif;
}
```

```jsx
import './global.css'; // Imported in index.js
```

✅ **CSS Modules do not affect global styles**.

---

## 🔹 **4. Using CSS Modules in Next.js 🚀**

CSS Modules work out of the box in Next.js.

```jsx
import styles from './Home.module.css';

export default function Home() {
  return <h1 className={styles.title}>Next.js CSS Module ⚛️</h1>;
}
```

---

## 🔹 **5. CSS Modules with SASS (`.module.scss`) 💅**

You can also use Sass with CSS Modules.

### 📌 **Install Sass**
```sh
npm install sass
```

### 🖌 **Example**
```scss
/* styles.module.scss */
.container {
  background: purple;
  color: white;
  &:hover {
    background: darkblue;
  }
}
```

```jsx
import styles from './styles.module.scss';

export default function App() {
  return <div className={styles.container}>Styled with SCSS ✨</div>;
}
```

---

## 🔹 **6. Animations with CSS Modules 🎬**

```css
/* styles.module.css */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 1s ease-in;
}
```

```jsx
import styles from './styles.module.css';

export default function App() {
  return <div className={styles.fadeIn}>Animated Text 🎞️</div>;
}
```

---

## 🔹 **7. Theming with CSS Modules 🎨**

You can use CSS variables inside modules for theming.

```css
/* theme.module.css */
:root {
  --primary-color: blue;
}

.container {
  color: var(--primary-color);
}
```

```jsx
import styles from './theme.module.css';

export default function App() {
  return <div className={styles.container}>Themed Component 🎭</div>;
}
```

---

## 🔹 **8. Best Practices ✅**

✔️ Keep module files small and relevant to components  
✔️ Use `.module.scss` if you need advanced styling  
✔️ Avoid deep nesting for better maintainability  
✔️ Use `classnames` for conditional styles  

---

Would you like a practical project using CSS Modules? 🚀

