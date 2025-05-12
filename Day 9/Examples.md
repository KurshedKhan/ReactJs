Here are several practical examples of how to use `useState` in React:

---

### ✅ 1. **Basic Counter Example**

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### ✅ 2. **Toggle Boolean Value**

```jsx
import React, { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Text
      </button>
      {isVisible && <p>This is visible</p>}
    </div>
  );
}
```

---

### ✅ 3. **Handling Input Field**

```jsx
import React, { useState } from 'react';

function InputBox() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
```

---

### ✅ 4. **Array State (Add Items)**

```jsx
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### ✅ 5. **Object State Example**

```jsx
import React, { useState } from 'react';

function ProfileForm() {
  const [profile, setProfile] = useState({ name: '', age: '' });

  return (
    <div>
      <input
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        placeholder="Age"
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
      />
      <p>
        Name: {profile.name}, Age: {profile.age}
      </p>
    </div>
  );
}
```

