## 📦 Updated Full Code (React Hook Form + All Features)

```jsx
import React, { useState } from 'react';
import {
  useForm,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

// Step 1: Name, Email, Role
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
              message: 'Invalid email address',
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Role:</label><br />
        <select {...register('role', { required: 'Role is required' })}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </select>
        <p style={{ color: 'red' }}>{errors.role?.message}</p>
      </div>

      <button type="button" onClick={onNext} style={{ marginTop: '20px' }}>
        Next
      </button>
    </div>
  );
}

// Step 2: Password + Confirm Password
function Step2({ onNext, onPrev }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const password = watch('password');

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
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Confirm Password:</label><br />
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === password || 'Passwords do not match',
          })}
        />
        <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
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

// Step 3: Upload File + Preview
function Step3({ onPrev }) {
  const { register, getValues } = useFormContext();

  const { name, email, role, password } = getValues();

  const previewFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const img = document.getElementById('preview-img');
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Password:</strong> {`•`.repeat(password.length)}</p>

      <div style={{ marginTop: '10px' }}>
        <label>Upload Profile Image:</label><br />
        <input
          type="file"
          accept="image/*"
          {...register('profileImage')}
          onChange={previewFile}
        />
        <img id="preview-img" alt="Preview" style={{ marginTop: '10px', maxWidth: '100px' }} />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={onPrev}>Back</button>
        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </div>
    </div>
  );
}

// Main Component with Animation
function MultiStepForm() {
  const methods = useForm({ mode: 'onTouched' });
  const [step, setStep] = useState(1);

  const handleNext = async () => {
    const fields = {
      1: ['name', 'email', 'role'],
      2: ['password', 'confirmPassword'],
    };

    const valid = await methods.trigger(fields[step]);
    if (valid) setStep((s) => s + 1);
  };

  const handlePrev = () => setStep((s) => s - 1);

  const onSubmit = (data) => {
    alert('Signup Complete 🎉\n' + JSON.stringify(data, null, 2));
    setStep(1);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>Signup - Step {step}</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            {step === 1 && <Step1 onNext={handleNext} />}
            {step === 2 && <Step2 onPrev={handlePrev} onNext={handleNext} />}
            {step === 3 && <Step3 onPrev={handlePrev} />}
          </motion.div>
        </AnimatePresence>
      </form>
    </FormProvider>
  );
}

export default MultiStepForm;
```

---

## 📚 How to Use

1. **Install the required packages**:

```bash
npm install react-hook-form framer-motion
```

2. ✅ Import and use `MultiStepForm` in your app.

---

## 🔚 Result

* 🔄 File upload with preview
* 🔽 Role dropdown (Student, Admin, etc.)
* 🔒 Password & confirm password with validation
* 🌟 Animated step transitions (Framer Motion)

---
