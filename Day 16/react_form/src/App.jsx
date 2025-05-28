import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit1(data) {
    console.log("My form data is : ", data);
    reset();
  }

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={handleSubmit(onSubmit1)}>
        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            {...register("FirstName", {
              required: true,
              minLength: { value: 3, message: "Min 3 character length" },
              maxLength: 10,
            })}
            placeholder="First Name"
          />
        </div>
        <br />
        {errors.FirstName && <p>{errors.FirstName.message}</p>}
        <div>
          <label>Middle Name</label>
          <br />
          <input
            type="text"
            {...register("MiddleName", {
              required: true,
              minLength: { value: 3, message: "Min 3 character length" },
              maxLength: 10,
            })}
            placeholder="Middle Name"
          />
        </div>
        <br />
          {errors.MiddleName && <p>{errors.MiddleName.message}</p>}
        <div>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            {...register("LastName", {
              required: true,
              minLength: { value: 3, message: "Min 3 character length" },
              maxLength: 10,
            })}
            placeholder="Last Name"
          />
        </div>
        <br />
          {errors.LastName && <p>{errors.LastName.message}</p>}
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default App;
