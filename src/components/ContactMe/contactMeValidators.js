const validateName = (text) => {
    return text.length >= 1 ? false : true;
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

const validateEmail = (text) => {
    if(text.length === 0) return 1;
    if(!(text.toLowerCase().match(emailRegex))) return 2;
    return 0;
};

const validateMessage = (text) => {
    return text.length >= 1 ? false : true;
};

const emailErrorToMessage = (num) => {
    if(num === 1) return 'Email is required';
    if(num === 2) return 'Email address is invalid';
    return ' ';
}

export {validateEmail,validateName,validateMessage,emailErrorToMessage};