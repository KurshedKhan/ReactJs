import { useForm } from "react-hook-form";
import "./App.css"
function App() {
  const {register,handleSubmit,reset, formState: { isSubmitting,errors }} = useForm();

  async function onSubmit1(data) {

    await new Promise((resolve)=>setTimeout(resolve,5000))
    
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
              pattern:{value: /^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/i,message : "Upper Case" },
              maxLength: 10,
            })}
            placeholder="First Name"
          />
        </div>
        {errors.FirstName && <p className="error-msg">{errors.FirstName.message}</p>}<br></br>
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
          {errors.MiddleName && <p className="error-msg">{errors.MiddleName.message}</p>}
          <br />
        <div>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            {...register("LastName", {
              required: true,
              pattern: {value : /^[A-Za-z]+$/i , message: "only character" },
              minLength:{value : 3,message:"Min 3 character length."},
              maxLength: 10
            })}
            placeholder="Last Name"
          />
        </div>
          {errors.LastName && <p className="error-msg">{errors.LastName.message}</p>} <br />
        <div>
          <button type="submit" disabled={isSubmitting} >
          {isSubmitting ? "Please wait..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
