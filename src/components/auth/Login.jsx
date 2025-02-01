import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//login component
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const proceedLogin = async (e) => {
        e.preventDefault();


        const response = await fetch("http://localhost:8000/users");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const users = await response.json();
            const user = users.find(user => user.email === email);

            if (user) {
                if (user.password === password) {
                    alert("Log In Successful");
                    navigate('/home');
                } else {
                    alert("Wrong Password");
                }
            } else {
                alert("Email not Found. Try Signing Up");
            }
    }

    return(
        <div className='login'>
            <h4>Login to Event Manager</h4>
            <form onSubmit={proceedLogin}> 
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type='email' id='email' name='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password' id='password' name='password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login;