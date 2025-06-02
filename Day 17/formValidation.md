A **real-world example** of a **form with validation** using the `useReducer` hook in React.

---

### 📝 Example: Login Form with Validation (`email` + `password`)

This form includes:

* Email and password inputs
* Validation:

  * Email should include `@`
  * Password should be at least 6 characters
* Error messages
* Centralized state management using `useReducer`

---

### ✅ Full Code

```jsx
import React, { useReducer } from 'react';

// Initial State
const initialState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
        emailError: action.payload.includes('@') ? '' : 'Invalid email',
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
        passwordError: action.payload.length >= 6 ? '' : 'Password too short',
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.emailError && !state.passwordError) {
      alert('Login successful!');
      dispatch({ type: 'RESET' });
    } else {
      alert('Please fix the errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Login Form</h2>

      <div>
        <label>Email:</label><br />
        <input
          type="text"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
        <div style={{ color: 'red' }}>{state.emailError}</div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Password:</label><br />
        <input
          type="password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        />
        <div style={{ color: 'red' }}>{state.passwordError}</div>
      </div>

      <button type="submit" style={{ marginTop: '15px' }}>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
```

---

### 🔍 Breakdown (in Hindi):

* `useReducer`: फ़ॉर्म का सारा डेटा और वैलिडेशन एक जगह संभालता है।
* `SET_EMAIL` और `SET_PASSWORD`: यूज़र के इनपुट के हिसाब से स्टेट अपडेट करते हैं।
* अगर ईमेल में `@` नहीं है तो error दिखती है।
* अगर पासवर्ड छोटा है तो error दिखती है।
* सब कुछ reducer के ज़रिए कंट्रोल होता है।

---
