import Para1 from "./Para";

function Greet({Name,Age,Para}) {
  return (
    <>
      <h1>Hello , my name is {Name}.</h1>
      <p>and my age is {Age}</p>
      <Para1 yashname={Para}></Para1>
    </>
  );
}

export default Greet;
