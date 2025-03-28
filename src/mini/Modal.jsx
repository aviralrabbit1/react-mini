import React, { useState, useEffect } from "react";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      dob: "",
      phone: "",
    });

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.id]: e.target.value,
        });
    };

    // Validate form data
    const validateForm = () => {
        const { username, email, dob, phone } = formData;

        if (!username.trim()) {
            alert("Username cannot be empty.");
            return false;
        }
        if (!email.includes("@")) {
            alert("Invalid email. Please check your email address.");
            return false;
        }
        if (phone.length !== 10 || isNaN(phone)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }
        const today = new Date().toISOString().split("T")[0];
        if (dob > today) {
            alert("Invalid date of birth. Date cannot be in the future.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert("Form submitted successfully!");
          // Reset modal and form
          setShowModal(false);
          setFormData({
            username: "",
            email: "",
            dob: "",
            phone: "",
          });
        }
    };

    // Handle closing modal when clicking outside
    const handleClickOutside = (e) => {
        if (e.target.className === "modal") {
        setShowModal(false);
        }
    };

    // Add event listener to detect outside click
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }}>
        <h1>User Details Modal</h1>
        {!showModal && (
        <button className="open-form-button" onClick={() => setShowModal(true)}>
          Open Form
        </button>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                required
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                maxLength="10"
                required
              />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal