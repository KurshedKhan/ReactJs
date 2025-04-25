function Calculate(){

  let value1 = 10;
  let value2 = 20;

  // let total = value1 + value2;

  function total(){
    return value1 + value2;
  }

  return (
    <div>
        <h1>=== Calculator ===</h1>
        <p>Sum of value1 is {value1} and Value 2 is {value2}: , Total : {total()}</p>
    </div>
  )

}

export default Calculate;