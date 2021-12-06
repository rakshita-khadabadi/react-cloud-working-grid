import React,{useState} from 'react';
import './login.css';
import { useHistory } from "react-router-dom";
import axios from "axios";



const Login = (props) => {

    const [email,setUsername] = useState('')   // username=email
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    const[loading,setLoading] = useState(false)

    let history = useHistory();
    const handleLogin = () =>  {
        setError(null)
        setLoading(true)
        console.log(email,password, 'values')
        axios.post("http://35.230.33.4:8080/user/login",{
            email:email,
            password:password
        }).then(response => {
            setLoading(false)
            console.log(response,'response')
            console.log(response.data.data.loginStatus,'response')
            if(response.data.data.loginStatus === 'success'){
                console.log('success')
                history.push({
                    pathname: '/dashboard',
                    state: {
                        userId: response.data.data.userId,
                        roleName: response.data.data.role,
                        firstName:response.data.data.firstName,
                        lastName:response.data.data.lastName,

                    }
                });
                //history.push('/dashboard',{role:response.data.data.role});
            }
            else{
                setError(response.data.data.error);
                //<p>{response.data.data.error}</p>
            }
            

        }).catch(e => {
            setLoading(false)
            // if(e.response.status === 500){
                 setError('Enter the right and required details');
            // }
            console.error(e, 'error')

        })
          
        

    }
    
        return (

            <div>
            <div className="login">
                
                 <br/><br/>
                <div >
                    Email<br/>
                    <input type = "text" className="inputbox"
                    value = {email}
                    onChange={e => setUsername(e.target.value)}
                    />
                </div> <br/>

                <div>
                    Password<br/>
                    <input type = "password" className="inputbox"
                    value = {password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <br/>

                <div>
                    <input className = "loginbutton" type = "button" value = {loading?"Loading...":"Login"}
                    disabled = {loading}
                    onClick = {handleLogin}
                    />
                </div>

            </div>
            </div>
        )
    
}

export const getUser = () =>{
    const userStr= this.response
    console.log(userStr, 'response in export')
}


export default Login
