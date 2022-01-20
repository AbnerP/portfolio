import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import Send from '@material-ui/icons/Send';
import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./ContactMe.css";
import { emailErrorToMessage, validateEmail, validateMessage, validateName } from "./contactMeValidators.js";

const useStyles = makeStyles((theme) => {
  return {
    input: {
      margin: theme.spacing(1),
    }
  };
});



function ContactMe() {
  const classes = useStyles();
  const sentToast = () => toast("Email sent!");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError,setNameError] = useState(false);
  const [emailError,setEmailError] = useState(0);
  const [messageError,setMessageError] = useState(false);

  const [nameClicked,setNameClicked] = useState(false);
  const [messageClicked,setMessageClicked] = useState(false);

  const [messageModified,setMessageModified] = useState(false);

  const [valid,setValid] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkmdm7f",
        "template_7v261ol",
        e.target,
        "user_8xZpmuiB4SUXtsvmtYq2y"
      )
      .then(() => {
        clearForm();
        sentToast();
      })
      .catch((e) => console.log(e));
  };

  const clearForm = () => {
    setEmail("");
    setName("");
    setMessage("");

    setNameError(false);
    setEmailError(0);
    setMessageError(false);

    setNameClicked(false);
    setMessageClicked(false);
    setMessageModified(false);

    setValid(false);
  };

  useEffect(()=>{
    setNameError(validateName(name));
  },[name]);
  
  useEffect(()=>{
    setEmailError(validateEmail(email));
  },[email]);

  useEffect(()=>{
    setMessageError(validateMessage(message));
  },[message]);

  useEffect(()=>{
    if(!nameError && !messageError && emailError === 0 && nameClicked && messageClicked && messageModified) {
      setValid(true);
    }else{
      setValid(false);
    }
  },[nameError,emailError,messageError,nameClicked,messageClicked,messageModified])

  useEffect(()=>{
    setNameError(false);
    setEmailError(0);
    setMessageError(false);
    setValid(false);
  },[])

  

  return (
    <div className="contactMe">
      <Typography variant="h4" component="h2" align="center" >Contact Me</Typography>
      <form className="contactMe__form" onSubmit={sendEmail}>
          <TextField 
          onClick={() => setNameClicked(true)}
          onBlur={(e) => {
            setNameError(!(e.target.value.length > 0));
          }}
          onChange={(e) => setName(e.target.value)}
          className={classes.input}
          label="Name"
          variant="outlined"
          color="primary"
          id="name"
          name="name"
          value={name}
          fullWidth
          error={nameError}
          helperText={nameError ? 'Name is required' : ' '}
          />

          <TextField 
          onBlur={(e) => setEmailError(validateEmail(e.target.value))}
          onChange={(e) => {setEmail(e.target.value)}}
          className={classes.input}
          label="Email"
          variant="outlined"
          color="primary"
          name="email"
          id="email"
          value={email}
          fullWidth
          error={emailError === 0 ? false : true}
          helperText={emailErrorToMessage(emailError)}
           />

          <TextField 
          onFocus={() => setMessageClicked(true)}
          onBlur={(e) => {
            setMessageError(validateMessage(e.target.value));
          }}
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageModified(true)
          }}
          className={classes.input}
          label="Message"
          variant="outlined"
          color="primary"
          id="message"
          name="message"
          value={message}
          fullWidth
          multiline
          rows={4}
          error={messageError}
          helperText={messageError  ? 'A message is required' : ' '}
          />

        <Button variant="outlined" color="primary" type="submit" disabled={!valid} endIcon={<Send />} disableElevation >
          Send 
        </Button>

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
