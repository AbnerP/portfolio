import emailjs from "emailjs-com";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./ContactMe.css";

function ContactMe() {
  const sentToast = () => toast("Email sent!");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkmdm7f",
        "template_7v261ol",
        e.target,
        "user_8xZpmuiB4SUXtsvmtYq2y"
      )
      .then((res) => {
        clearForm();
        sentToast();
      })
      .catch((e) => console.log(e));
  };

  const clearForm = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contactMe">
      <h1 className="contactMe_Greeting">Contact me</h1>
      <form className="contactMe__form" onSubmit={sendEmail}>
        <div className="contactMe__formGroup">
          <label htmlFor="name">Name</label>
          <input
            className="contactMe__input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contactMe__formGroup">
          <label htmlFor="email">Email</label>
          <input
            className="contactMe__input"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contactMe__formGroup">
          <label htmlFor="message">Message</label>
          <textarea
            className="contactMe__input"
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="contactMe_submitBTN" type="submit">
          Send
        </button>
      </form>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            background:"#F87666",
            padding: "16px",
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default ContactMe;
