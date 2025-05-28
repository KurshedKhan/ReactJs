## 🟢 **Chapter 1: Introduction to React Hook Form**

### Theory
- **What is React Hook Form?**  
  A performant, flexible, and extensible form library for React that uses uncontrolled components with isolated re-renders.
- **Why use it?**  
  - Minimizes re-renders  
  - Reduces code complexity  
  - Built-in validation  
  - Better performance compared to controlled forms

### Code
```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🟡 **Chapter 2: Basic Form Setup**

### Theory
- **`register()`**: Links input fields to the form state.
- **`handleSubmit()`**: Wraps your submit handler and validates data.
- **`reset()`**: Clears form fields after submission.

### Code
```jsx
function BasicForm() {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clear form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🟠 **Chapter 3: Validation (Basic & Custom)**

### Theory
- **Built-in validators**: `required`, `min`, `max`, `pattern`.
- **Custom validation**: Use `validate` to define custom rules.
- **Error handling**: Access errors via `formState.errors`.

### Code
```jsx
function ValidationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('username', { 
          required: 'Username is required',
          minLength: { value: 3, message: 'Min 3 characters' }
        })} 
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input
        {...register('age', {
          validate: (value) => value >= 18 || 'Age must be 18+'
        })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🔵 **Chapter 4: Advanced Validation with Yup + Zod**

### Theory
- **Yup/Zod**: Schema validation libraries.
- **Resolver**: Integrates schema validation with RHF.

### Code (Yup Example)
```bash
npm install yup @hookform/resolvers
```

```jsx
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  age: yup.number().positive().required(),
});

function YupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
    </form>
  );
}
```

---

## 🟣 **Chapter 5: Working with Complex Forms**

### Theory
- **Dynamic Fields**: Use `useFieldArray` for arrays.
- **Conditional Fields**: Show/hide fields based on user input.

### Code (Dynamic Fields)
```jsx
import { useFieldArray } from 'react-hook-form';

function DynamicForm() {
  const { control, register } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'emails'
  });

  return (
    <form>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`emails.${index}.value`)} />
          <button onClick={() => remove(index)}>Delete</button>
        </div>
      ))}
      <button onClick={() => append({ value: '' })}>Add Email</button>
    </form>
  );
}
```