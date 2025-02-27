import React, { useState } from 'react'

const Login = () => {
    const loginDetails = {
        username: "user",
        password: "password"
    };
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    });
    const [submitted, setSubmitted] = useState(false); // Track submission
    const [welcomeMessage, setWelcomeMessage] = useState(""); // State for welcome message
    const [isValid, setIsValid] = useState(false);    
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // setUserDetails({
        //     username: username,
        //     password: password
        // }); // Update the userDetails state
                // Check if the username and password match the expected values
        
        if (userDetails.username === "user" && userDetails.password === "password") {
            // setWelcomeMessage(`Welcome, ${userDetails.username}!`); // Set the welcome message
            setIsValid(true);
        } 
        // setWelcomeMessage("Invalid username or password"); // Set the error message
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "90vh"
        }}>
            <h1>Login Page</h1>              
            {(!submitted)? 
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required  placeholder='username'
                value={userDetails.username} // Set value to username
                onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} 
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" required placeholder='password'
                value={userDetails.password} // Set value to password
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} 
                />
                <br />
                <button type="submit" onClick={()=> setSubmitted(true)} >Submit</button>
            </form>
            : isValid? <div>Welcome, user!</div>
            :
            (<>
                <div>Invalid username or password</div>
                <form action="submit" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" required  placeholder='username'
                    value={userDetails.username} // Set value to username
                    onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} 
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" required placeholder='password'
                    value={userDetails.password} // Set value to password
                    onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} 
                    />
                    <br />
                    <button type="submit" onClick={()=> setSubmitted(true)} >Submit</button>
                </form>
            </>)}
        </div>
    )
}

export default Login