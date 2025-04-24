
# 📁 File Extensions in JavaScript & React

## 1. `.js`
- **Stands for:** JavaScript File  
- **Used For:** Writing regular JavaScript code (functions, logic, variables).
- **Common In:** Node.js backend, frontend scripts, utility functions.

## 2. `.jsx`
- **Stands for:** JavaScript XML  
- **Used For:** Writing **React components** using JSX syntax (HTML inside JavaScript).
- **Example:**
  ```jsx
  const MyComponent = () => <h1>Hello World</h1>;
  ```
- **Important:** Babel compiles JSX into regular JavaScript.

## 3. `.ts`
- **Stands for:** TypeScript  
- **Used For:** JavaScript with **type safety**.
- **Example:** 
  ```ts
  let age: number = 25;
  ```

## 4. `.tsx`
- **Stands for:** TypeScript with JSX  
- **Used For:** Writing **React components** with TypeScript support.
- **Example:**
  ```tsx
  const Greeting: React.FC = () => <h2>Hello TSX</h2>;
  ```

---

# 📝 Purpose Summary

| Extension | Purpose                             | Used In      |
|-----------|-------------------------------------|--------------|
| `.js`     | Standard JavaScript code            | All JS apps  |
| `.jsx`    | React components (JSX syntax)       | React        |
| `.ts`     | Type-safe JavaScript (TypeScript)   | TypeScript   |
| `.tsx`    | React components with TypeScript    | React + TS   |
