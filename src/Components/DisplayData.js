import React from "react";
const StudentProfile = {
    name: "Sunny Chauhan",
    age: 21,
    height: 5.6,
    bloodroup: "A+",
    imgPath : "https://i.imgur.com/yXOvdOSs.jpg",
    imgSize : 80,

};
export default function DisplayData() {
  return (
    <>
      <div>
        <h1>Name : {StudentProfile.name}</h1>
        <h1>Age : {StudentProfile.age}</h1>
        <h1>Height : {StudentProfile.height}</h1>
        <h1>Bloodgroup : {StudentProfile.bloodroup}</h1>
      </div>
      <div className="ImageRounded">
        <img src={StudentProfile.imgPath} alt={'Student Name : ' + StudentProfile.name} width={StudentProfile.imgSize} height={StudentProfile.imgSize}/>
      </div>
    </>
  );
}
