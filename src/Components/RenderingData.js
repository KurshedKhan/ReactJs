import React from 'react'
const studnetDetails = [
    {Name : "Sunny",RollNo : 101 , Age : 21 , Height : 5.7 , Bloodgroup : "A+"},
    {Name : "Satveer",RollNo : 102 , Age : 23 , Height : 5.5 , Bloodgroup : "A-"},
    {Name : "Gaurav",RollNo : 103 , Age : 16 , Height : 5.7 , Bloodgroup : "O+"},
    {Name : "Pooja",RollNo : 104 , Age : 14 , Height : 5.8 , Bloodgroup : "B+"},
    {Name : "Riya",RollNo : 105 , Age : 27 , Height : 5.2 , Bloodgroup : "AB+"},
    {Name : "Ritu",RollNo : 106 , Age : 20 , Height : 5.6 , Bloodgroup : "O-"},

];

export default function RenderingData() {

    const listStudent = studnetDetails.map(std1 =>

        <li key={std1.RollNo} style={{color :(std1.Age >=21)?'green':'red'}}>
            Name :{std1.Name}, Age : {std1.Age}, Height : {std1.Height}, Bloodgroup : {std1.Bloodgroup}
        </li>
    
    
        );

  return (
    <div>
      <ol>{listStudent}
      </ol>
    </div>
  );
};
