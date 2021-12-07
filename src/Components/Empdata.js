import React from 'react'

const Empdata = ({employee}) => {
    let currDate = new Date("10-10-2020");
   // console.log(currDate)
    let newDate = currDate.getDate();
   // console.log(newDate)
   let newDate1 = newDate < 10 ? `0${newDate}` : `${newDate}`;
    //console.log(newDate1);
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let currentMonth = month[currDate.getMonth()];
    //console.log(currentMonth);
    let actualDate = `${newDate1} ${currentMonth}`
    //console.log(currentMonth);
    console.log(actualDate);
    return employee.map(({id,name,dob,age,gender,image})=>{
        let empDOB = dob;
        
        if(empDOB === actualDate) {
            return(
                <div key={id} className="person">
                    <img src ={image} alt={name}/>
                    <div className="emp_details">
                        <h4>{name}</h4>
                        <p>Gender:{gender}</p>
                        <p>{dob}</p>
                        <p>Age: {age}</p>
                    </div>
                </div>
            )
        }
        else
        {
            return null
        }
    });
    
};

export default Empdata;
