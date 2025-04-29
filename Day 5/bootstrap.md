# Bootstrap in React - Theory

## What is Bootstrap?
Bootstrap is a popular front-end framework used to design responsive and mobile-first websites quickly.

## Why use Bootstrap in React?
- To speed up UI development.
- To use pre-designed responsive components.
- To maintain consistent design.

## Ways to Use Bootstrap in React
1. **Using Bootstrap CDN**  
   - Add Bootstrap CSS link to `public/index.html`.
   
2. **Installing Bootstrap via npm**  
   ```bash
   npm install bootstrap
   ```
   Then import it in `src/index.js` or `src/main.jsx`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```
   
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.js';
   ```
3. **Using React-Bootstrap** (Component-based)  
   - Install it:
   ```bash
   npm install react-bootstrap bootstrap
   ```
   - Example:
   ```javascript
   import { Button } from 'react-bootstrap';
   ```

## Bootstrap vs React-Bootstrap
| Bootstrap | React-Bootstrap |
|-----------|-----------------|
| Uses HTML classes. | Uses React components. |
| Manual JavaScript handling needed. | Native React components with Bootstrap styles. |

## Important Points
- Bootstrap helps in layout (Grid System), responsiveness, and basic components (buttons, cards, forms).
- React-Bootstrap rewrites Bootstrap components as React components.

---

# Bootstrap in React - Practical Examples

## 1. Install Bootstrap
```bash
npm install bootstrap
```

## 2. Import Bootstrap
```javascript
// in src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
```

## 3. Example 1: Basic Button

```jsx
function App() {
  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}
export default App;
```

## 4. Example 2: Using React-Bootstrap Button

```bash
npm install react-bootstrap bootstrap
```

```jsx
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="text-center mt-5">
      <Button variant="success">React Bootstrap Button</Button>
    </div>
  );
}
export default App;
```

## 5. Example 3: Bootstrap Grid System

```jsx
function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 bg-primary text-white p-3">Column 1</div>
        <div className="col-md-6 bg-success text-white p-3">Column 2</div>
      </div>
    </div>
  );
}
export default App;
```

---

