import React, { useState, useEffect } from "react";
import "./UserTabel.css";

const UserFormPopup = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({ ...user, password: "" });
    }
  }, [user]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const updatedData = { ...formData };
    if (!formData.password) {
      delete updatedData.password;
    }

    const url = user
      ? `http://localhost:8000/api/users/${user.id}`
      : "http://localhost:8000/api/users";
    const method = user ? "PUT" : "POST";
    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to perform this action.");
      return;
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to save user.");
        throw new Error(errorData.message);
      }

      const successMessage = user
        ? "User successfully updated!"
        : "User successfully added!";
      showNotification(successMessage);

      onClose();
    } catch (error) {
      console.error(`Error ${user ? "updating" : "creating"} user:`, error);
      setError(error.message || "Something went wrong.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        {notification && <div className="notification">{notification}</div>}
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required={!user}
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserFormPopup;
