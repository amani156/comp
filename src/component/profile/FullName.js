import React from 'react';






const FullName = () => {
    let firstName ="Rick";
    let lastName ="Sanchez";
    return (
        <div className="name">

         <p>{"Full Name : "+ firstName + " " + lastName}</p>
            
        </div>
    )
}

export default FullName
