import { useState } from "react";
import MyNavbar from "../../components/navbar/navbar";
import "./login.css";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate()


  const submitHandler = ()=>{
    if(username == "admin" && password == "12345" ) {
        document.cookie = "username=admin; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
        navigate('/panel')
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'یوزرنیم یا پسورد اشتباه است!',
            icon: 'error',
            confirmButtonText: 'بستن'
          })
    }
  }

  return (
    <div>
      <MyNavbar />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" />
            <button type="button" onClick={submitHandler} >login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
