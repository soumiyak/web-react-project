import React from "react";
import { useState } from "react";
import './login.css';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const[fname, setfname] = useState('');
    const[lname, setlname] = useState('');
    const[pass, setPass] = useState('');
    const[Cpass, setCPass] = useState('');
    const[address, setAddress] = useState('');
    const[city, setCity] = useState('');
    const[zip, setZip] = useState('');
    const[phonenumber, setPhonenumber] = useState('');function handleSubmit(e)
    {
     e.preventDefault();
     if(fname==="")
        toast("No user name entered");
    else if(lname === " ")
        toast("no password entered");
    else if(pass ===" ")
        toast("no Cpassword entered");
    else if(Cpass ===" ")
        toast("no Cpassword entered");
    else if(pass !== Cpass)
        toast("password not matched with cpassword");
    else if(address ==="")
        toast("Enter the address");
    else if(city ==="")
        toast("Enter the city");
    else if(zip ==="")
        toast("Enter the zip");
    else if(phonenumber.length<10)
        toast("enter the valid phone number");
    else{
     alert("FirstName: "+fname);
     console.log("LastName: "+lname);
     console.log("password: "+pass);
     console.log("Cpassword: "+Cpass);
     console.log("Address: "+address);
     console.log("city: "+city);
     console.log("zip: "+zip);
     console.log("phonenumber: "+phonenumber);
    }
    }
    return(
       <>

       <h1>CUSTOMER LOGIN</h1>
        <form onSubmit={handleSubmit}>
        FirstName:
           <input
                type="text"
                value={fname}  
                onChange={(element)=>setfname(element.target.value)} />
                <br/><br/>
            LastName:<input
                type="text"
                value={lname}  
                onChange={(element)=>setlname(element.target.value)} />
                <br/><br/>
           
            Password:<input
                type="text"
                value={pass}
                onChange={(element)=>setPass(element.target.value)} /><br/><br/>
            CPassword:<input
                type="text"
                value={Cpass}
                onChange={(element)=>setCPass(element.target.value)} /><br/><br/>
            Address:<input
                type="text"
                value={address}  
                onChange={(element)=>setAddress(element.target.value)} />
                <br/><br/>
            City:<input
                type="text"
                value={city}  
                onChange={(element)=>setCity(element.target.value)} /><br></br><br></br>
            Zip:<input
                type="text"
                value={zip}  
                onChange={(element)=>setZip(element.target.value)} />
                <br/><br/>
            Phone number:<input
                type="text"
                value={phonenumber}  
                onChange={(element)=>setPhonenumber(element.target.value)} />
                <br/><br/>
            <input type="submit" value="submit"/>
        </form>
        <ToastContainer/>
        </>
    )
}

export default Login;
