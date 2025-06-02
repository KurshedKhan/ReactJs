## ✅ Signup Form with `useReducer` + Validation

### 🎯 Features:

* Multiple fields (Name, Email, Password)
* Real-time validation
* Centralized state and error handling
* Easy to expand (multi-step or React Hook Form later)

---

### ✅ Full React Code

```jsx
import React, { useReducer } from 'react';

// Initial state
const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: '',
  },
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '', // Clear error when user types
        },
      };

    case 'VALIDATE':
      const errors = {};
      if (!state.name.trim()) errors.name = 'Name is required';
      if (!state.email.includes('@')) errors.email = 'Invalid email address';
      if (state.password.length < 6) errors.password = 'Password must be at least 6 characters';

      return {
        ...state,
        errors,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function SignupForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'VALIDATE' });

    const hasErrors = Object.values(state.errors).some((error) => error);
    if (!hasErrors && state.name && state.email && state.password) {
      alert('Signup Successful! 🎉');
      dispatch({ type: 'RESET' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Signup Form</h2>

      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{state.errors.name}</div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Email:</label><br />
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{state.errors.email}</div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{state.errors.password}</div>
      </div>

      <button type="submit" style={{ marginTop: '15px' }}>Signup</button>
    </form>
  );
}

export default SignupForm;
```

---

## 🧠 What's Happening?

| Part        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `SET_FIELD` | Updates the field and clears the error when the user types   |
| `VALIDATE`  | Runs on form submit to check for valid name, email, password |
| `errors`    | Holds all validation messages                                |
| `RESET`     | Resets the form after successful signup                      |

---
