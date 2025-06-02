Let’s build a **multi-step signup form** using `useReducer` where:

* ✅ **Step 1**: Enter Name & Email
* ✅ **Step 2**: Enter Password
* ✅ **Step 3**: Confirm and Submit

---

## 🚧 Structure Overview

We'll manage:

* Current step
* Form data
* Validation errors

---

## ✅ Code: Multi-Step Signup Form using `useReducer`

```jsx
import React, { useReducer } from 'react';

// Initial state
const initialState = {
  step: 1,
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: '',
  },
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };

    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };

    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };

    case 'VALIDATE_STEP':
      const errors = { ...state.errors };

      if (state.step === 1) {
        if (!state.name.trim()) errors.name = 'Name is required';
        if (!state.email.includes('@')) errors.email = 'Valid email required';
      }

      if (state.step === 2) {
        if (state.password.length < 6)
          errors.password = 'Password must be at least 6 characters';
      }

      return { ...state, errors };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function MultiStepSignupForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = () => {
    dispatch({ type: 'VALIDATE_STEP' });
    const currentErrors = Object.entries(state.errors).filter(([key, val]) => val);
    const relevantFields =
      state.step === 1 ? ['name', 'email'] : ['password'];

    const hasError = currentErrors.some(([key]) => relevantFields.includes(key));
    if (!hasError) {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const handlePrev = () => dispatch({ type: 'PREV_STEP' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup Complete 🎉');
    dispatch({ type: 'RESET' });
  };

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Signup - Step {state.step}</h2>

      {state.step === 1 && (
        <>
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
        </>
      )}

      {state.step === 2 && (
        <>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <div style={{ color: 'red' }}>{state.errors.password}</div>
          </div>
        </>
      )}

      {state.step === 3 && (
        <>
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Password:</strong> {`•`.repeat(state.password.length)}</p>
          <p>Everything looks good. Submit to complete signup.</p>
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        {state.step > 1 && (
          <button type="button" onClick={handlePrev}>Back</button>
        )}
        {state.step < 3 && (
          <button type="button" onClick={handleNext} style={{ marginLeft: '10px' }}>Next</button>
        )}
        {state.step === 3 && (
          <button type="submit">Submit</button>
        )}
      </div>
    </form>
  );
}

export default MultiStepSignupForm;
```

---

## 🧠 How It Works

| Step   | What Happens                                     |
| ------ | ------------------------------------------------ |
| Step 1 | User enters name and email → validated on "Next" |
| Step 2 | User enters password → validated on "Next"       |
| Step 3 | Shows entered data → on "Submit", shows success  |

---


