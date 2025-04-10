<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react';
function Navbar() {
    const  [counter ,setcount] = useState("ban hx")
    return (  
        <>
        <nav className="flex justify-content-center bg-gray-800 text-white p-3">
            <ul className="flex justify-content-center gap-5 "> 
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div className="d-block">
        <p>this sentents will :{counter} be increase </p>
        <button onClick={()=> setcount(counter + "fuck you ")}>Click me</button>
        <button onClick={()=> setcount(counter - counter)}>Click to back</button>
            </div>  
        </>

    );
}

export default Navbar;
=======
>>>>>>> 13c943fd0decb5f2e8099cc72a32402a7445a38b
>>>>>>> f8ec64ca879b8ed054c251618c63239a456be30a
