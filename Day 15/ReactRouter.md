## 🔰 **1. What is React Router?**

**React Router** is a standard library for routing in React. It allows you to handle navigation and rendering of components based on the URL in a Single Page Application (SPA).

---

## 🧱 **2. Installation**

```bash
npm install react-router-dom
```

Then, import it in your app:

```jsx
import { BrowserRouter } from 'react-router-dom';
```

---

## 🚦 **3. Basic Routing**

### Example:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📌 **4. Navigation using `Link` and `NavLink`**

```jsx
import { Link, NavLink } from 'react-router-dom';

<Link to="/">Home</Link>
<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
```

---

## 🔁 **5. Redirects using `Navigate`**

```jsx
import { Navigate } from 'react-router-dom';

<Route path="/old-home" element={<Navigate to="/" />} />
```

---

## 🪝 **6. Using `useParams`, `useNavigate`, `useLocation`**

### `useParams` (Dynamic Routing):

```jsx
<Route path="/user/:id" element={<User />} />

// In User component
let { id } = useParams();
```

### `useNavigate` (Programmatic Navigation):

```jsx
let navigate = useNavigate();
navigate('/about');
```

### `useLocation` (Access current route info):

```jsx
let location = useLocation();
console.log(location.pathname);
```

---

## 🔀 **7. Nested Routes**

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

Use `<Outlet />` in `Dashboard` component to render child routes.

---

## 🔒 **8. Protected Routes (Authentication)**

```jsx
function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem('token');
  return isAuth ? children : <Navigate to="/login" />;
}

<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

## 🧠 **9. Lazy Loading Routes**

```jsx
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home'));

<Route path="/" element={
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
} />
```

---

## 🎯 **10. 404 Not Found Page**

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 🧩 **11. Query Parameters**

```jsx
// URL: /products?category=books
import { useSearchParams } from 'react-router-dom';

let [searchParams] = useSearchParams();
console.log(searchParams.get('category')); // books
```

---

## 📚 Summary Table

| Feature          | Component/Hook        | Usage Example        |
| ---------------- | --------------------- | -------------------- |
| Basic Routing    | `<Route>`             | `path="/"`           |
| Navigation       | `<Link>`, `<NavLink>` | `to="/about"`        |
| Redirect         | `<Navigate>`          | `to="/"`             |
| Dynamic Params   | `useParams()`         | `/:id`               |
| Programmatic Nav | `useNavigate()`       | `navigate('/about')` |
| Current URL info | `useLocation()`       | `location.pathname`  |
| Nested Routes    | `<Outlet>`            |                      |
| Protected Routes | Custom + `<Navigate>` |                      |
| Lazy Loading     | `lazy`, `Suspense`    |                      |
| Query Params     | `useSearchParams()`   |                      |
| 404 Page         | `path="*"`            |                      |

---
