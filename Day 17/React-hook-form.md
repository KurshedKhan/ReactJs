## ✅ What is React Hook Form?

> A library that lets you build forms with less code, better performance, and easy validation using `react-hook-form`.

---

## 🔧 Setup (if not already)

Make sure you have installed it:

```bash
npm install react-hook-form
```

---

## ✅ Multi-Step Signup Form using React Hook Form

We'll build:

1. Step 1: Name & Email
2. Step 2: Password
3. Step 3: Confirm & Submit

---

### 📦 Full Code:

```jsx
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

function Step1({ onNext }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div>
        <label>Name:</label><br />
        <input {...register('name', { required: 'Name is required' })} />
        <p style={{ color: 'red' }}>{errors.name?.message}</p>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Email:</label><br />
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email',
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
      </div>

      <button type="button" onClick={onNext} style={{ marginTop: '20px' }}>
        Next
      </button>
    </div>
  );
}

function Step2({ onPrev, onNext }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div>
        <label>Password:</label><br />
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters required',
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={onPrev}>Back</button>
        <button type="button" onClick={onNext} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>
    </div>
  );
}

function Step3({ onPrev }) {
  const { getValues } = useFormContext();
  const { name, email, password } = getValues();

  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {`•`.repeat(password.length)}</p>

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={onPrev}>Back</button>
        <button type="submit" style={{ marginLeft: '10px' }}>
          Submit
        </button>
      </div>
    </div>
  );
}

import { useFormContext } from 'react-hook-form';

function MultiStepForm() {
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    alert('Signup Successful 🎉\n' + JSON.stringify(data, null, 2));
    setStep(1);
    methods.reset();
  };

  const handleNext = async () => {
    const valid = await methods.trigger(step === 1 ? ['name', 'email'] : ['password']);
    if (valid) setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>Signup - Step {step}</h2>

        {step === 1 && <Step1 onNext={handleNext} />}
        {step === 2 && <Step2 onPrev={handlePrev} onNext={handleNext} />}
        {step === 3 && <Step3 onPrev={handlePrev} />}
      </form>
    </FormProvider>
  );
}

export default MultiStepForm;
```

---

## 🧠 What’s Happening?

| Part               | Description                              |
| ------------------ | ---------------------------------------- |
| `useForm`          | Manages all form fields and validation   |
| `FormProvider`     | Shares form context across steps         |
| `useFormContext()` | Accesses form values/errors in each step |
| `trigger()`        | Validates current step’s fields manually |
| `getValues()`      | Used to display values in the final step |

---

