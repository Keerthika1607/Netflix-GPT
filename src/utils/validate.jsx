export const checkValidate = (name, email, password, isSignInForm) => {
   if (!isSignInForm) {
      if (!/^[A-Za-z\s]{3,30}$/.test(name.trim())) return "Name is not Valid";
   }
  
   if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return "Email ID is not Valid";
   if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) return "Password is not Valid";

   return null;
};