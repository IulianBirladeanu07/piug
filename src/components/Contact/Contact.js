// Import React
import React, { useState } from 'react';
import './Contact.css'
// Import Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCATfdd7eYlQhTyx2GAFX5OvHS3qKBnVuc",
  authDomain: "activerecovery-3a400.firebaseapp.com",
  projectId: "activerecovery-3a400",
  storageBucket: "activerecovery-3a400.appspot.com",
  messagingSenderId: "208634985017",
  appId: "1:208634985017:web:ff62b269645670672fabe8",
  measurementId: "G-G9EHVBG5ZG"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const docRef = await addDoc(collection(firestore, 'contactForms'), formData);
      console.log('Document written with ID:', docRef.id);
  
      // Update submit message on success
      setSubmitMessage('Form submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
  
      // Update submit message on error
      setSubmitMessage(`Error submitting form: ${error.message || 'Unknown error'}. Please try again.`);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mesaj</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Trimite</button>
      </form>

      {/* Display submit message */}
      {submitMessage && <p className="submit-message">{submitMessage}</p>}
    </div>
  );
};

export default Contact;
