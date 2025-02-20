import React, { useState } from 'react'

const Fullname = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullname, setfullname] = useState("");
  const [submitted, setSubmitted] = useState(false); // New state to track submission

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setfullname(`${firstName} ${lastName}`); // Update the fullname state
        // setFirstName(""); // Clear the first name input
        // setLastName(""); // Clear the last name input
        setSubmitted(true); // Set submitted to true
    };
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
        height: "90vh"
    }}>
      <h1>Full Name Display</h1>
        <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" name="first_name" id="first_name" required 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} />
            <br />
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" name="last_name" id="last_name" required
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} />
            <br />
            <button type="submit">Submit</button>
        </form>
        {submitted && <p>Full name: {fullname}</p>} {/* Conditionally render the full name */}
    </div>
  )
}

export default Fullname