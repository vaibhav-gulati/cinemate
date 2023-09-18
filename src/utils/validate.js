export const validateFunc=(email,psswd)=>{
    const emailVal = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const psswdVal = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(psswd);

    if(!emailVal) return 'EmailId is not valid';
    if(!psswdVal) return 'Password is not valid';

    return null;
}