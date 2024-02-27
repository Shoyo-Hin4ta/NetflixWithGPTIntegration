export const validateForm = (email, password, ...rest) => {
    
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    console.log(email, password, rest[0])

    if (rest.length > 0) {
        const fullName = rest[0];

        // Apply regex to fullname (assuming a simple example)
        const isFullnameValid = /^[a-zA-Z\s]+$/.test(fullName);

        if (!isFullnameValid || fullName.trim().length === 0) {
            return "Invalid Full Name Entered";
        }
    }

    if(!isEmailValid){
        return "Invalid Email Entered"
    }
    if(!isPasswordValid){
        return "Invalid Password Entered"
    }


    return null;

};