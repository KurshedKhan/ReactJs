## 📘 What is `createBrowserRouter`?

`createBrowserRouter()` is a function from **React Router v6.4+** that creates a modern, declarative routing system supporting:

* Data fetching via loaders
* Actions for form submissions
* Error handling
* Nested layouts

---

## 📦 **Installation**

```bash
npm install react-router-dom
```

---

## 🧱 **Basic Example**

```jsx
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

---

## 🧩 Key Features of `createBrowserRouter`

| Feature        | Description                      |
| -------------- | -------------------------------- |
| `element`      | Component to render              |
| `children`     | Nested routes                    |
| `loader`       | Function to load data            |
| `action`       | Function to handle form POST/PUT |
| `errorElement` | Error UI for route               |
| `path`         | URL path                         |
| `index: true`  | Index route for nested layout    |

---

## 🪝 Loaders (Data Fetching)

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      const res = await fetch('/api/home');
      return res.json();
    }
  }
]);
```

In your component:

```jsx
import { useLoaderData } from 'react-router-dom';
const data = useLoaderData();
```

---

## 🧾 Actions (Form Submission Handling)

```jsx
{
  path: '/contact',
  element: <ContactForm />,
  action: async ({ request }) => {
    const formData = await request.formData();
    // Submit form to server or API
  }
}
```

In JSX:

```jsx
<form method="post">
  <input name="email" />
  <button type="submit">Send</button>
</form>
```

---

## 🔁 Nested Routes with Layout

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ]
  }
]);
```

In `MainLayout`, use:

```jsx
import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
```

---

## ⚠️ Error Handling

```jsx
{
  path: '/',
  element: <Home />,
  errorElement: <ErrorPage />
}
```

---

## 📌 Full Project Example

```jsx
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/api/home'),
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## 🧠 Summary

| Term                  | Description                              |
| --------------------- | ---------------------------------------- |
| `createBrowserRouter` | Creates a browser router (HTML5 history) |
| `RouterProvider`      | Provides routing context to your app     |
| `element`             | Component to render                      |
| `loader`              | Fetches data before rendering            |
| `action`              | Handles form submissions                 |
| `errorElement`        | Component shown on error                 |
| `children`            | Nested routes                            |
| `Outlet`              | Placeholder for nested route components  |

---
