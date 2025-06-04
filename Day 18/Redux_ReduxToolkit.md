## 🧠 THEORY SECTION (BASIC TO ADVANCED)

### 🔹 1. What is Redux?

* **Redux** is a predictable **state management library** for JavaScript apps.
* Manages global state in a **single store**.
* Ideal for **large-scale applications** where many components share the same state.

### 🔹 2. Core Concepts

| Concept      | Description                                   |
| ------------ | --------------------------------------------- |
| **Store**    | Holds all application state (global state).   |
| **Action**   | Plain JS object describing *what happened*.   |
| **Reducer**  | Function that handles action & updates state. |
| **Dispatch** | Sends an action to reducer.                   |
| **Selector** | Reads data from the state.                    |

### 🔹 3. Why Use Redux?

* Centralized state
* Predictable state updates
* Easy debugging
* Middleware support (e.g., logging, async)

---

### 🔹 4. Problems in Classic Redux

* Too much boilerplate (action types, creators, reducers)
* Complex setup
* Verbose syntax

---

## 🛠 REDUX TOOLKIT (RTK): Modern Redux

### 🔸 What is Redux Toolkit?

* Official, **recommended** way to use Redux.
* Reduces boilerplate and simplifies Redux code.
* Includes tools like:

  * `createSlice()`
  * `configureStore()`
  * `createAsyncThunk()`

---

### 🔹 5. Redux Toolkit Core APIs

| API                     | Purpose                               |
| ----------------------- | ------------------------------------- |
| `createSlice()`         | Creates reducer, actions in one place |
| `configureStore()`      | Creates the store with good defaults  |
| `createAsyncThunk()`    | Handles async logic (API calls)       |
| `createEntityAdapter()` | Helps manage normalized state         |

---

## 🧪 PRACTICAL SECTION (STEP BY STEP)

---

### 🔸 STEP 1: Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 🔸 STEP 2: Setup Store (`store.js`)

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

### 🔸 STEP 3: Provide Store to React

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

### 🔸 STEP 4: Create a Slice (`counterSlice.js`)

```js
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 🔸 STEP 5: Use Redux in Components

```js
// Counter.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

### 🔸 STEP 6: Async Thunk Example

```js
// counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCount = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetch(`/api/counter/${amount}`);
    return await response.json();
  }
);

// Inside createSlice
extraReducers: (builder) => {
  builder
    .addCase(fetchCount.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCount.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.value += action.payload;
    })
    .addCase(fetchCount.rejected, (state) => {
      state.status = 'failed';
    });
}
```

---

## 🔍 ADVANCED CONCEPTS

### ✅ Middleware

* Logging, API monitoring, authentication

### ✅ Persist Redux Store

```bash
npm install redux-persist
```

### ✅ Normalization

* Use `createEntityAdapter` to handle normalized data like lists.

### ✅ Redux DevTools

* Integrated in `configureStore()` for debugging.

---

## 📦 BONUS: Folder Structure

```
/src
  /app
    store.js
  /features
    /counter
      counterSlice.js
      Counter.js
```

---

## 💡 Real Projects You Can Build

1. **Todo App** with filters and async API
2. **E-commerce Cart** state using Redux
3. **User Login System** (auth + token using Redux)

---

https://redux.js.org/tutorials/quick-start follow this link for redux tool kit code
https://redux-toolkit.js.org/introduction/getting-started follow this link for install libraries and packeage